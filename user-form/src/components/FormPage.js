import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Button, Typography } from "@mui/material";

const FormPage = ({ handleSubmit }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform basic front-end validation
    if (!name || !dateOfBirth || !email) {
      alert("Please fill in all required fields");
      return;
    }

    const nameValidate = new RegExp(/^[a-zA-Z0-9\s-_"]{3,30}$/);
    if (nameValidate.test(name) === false) {
      alert("Name should be Alphanumeric with range of 5 - 20 characters");
      return;
    }

    const emailValidate = new RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    if (emailValidate.test(email) === false) {
      alert("Give valid Email");
      return;
    }
    // Validation for age (minimum 18 years)
    const dob = new Date(dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    if (age < 18) {
      alert("Age must be at least 18 years");
      return;
    }

    handleSubmit({ name, dateOfBirth, email, phoneNumber });

    // Redirect to submitted forms page
    navigate("/submitted");
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Typography variant="h4" align="center" gutterBottom>
          User Form
        </Typography>
        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Date of Birth"
                type="date"
                variant="outlined"
                fullWidth
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default FormPage;
