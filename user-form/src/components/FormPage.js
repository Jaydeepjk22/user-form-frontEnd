import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Grid, TextField, Button, Typography } from "@mui/material";

const FormPage = ({ handleSubmit }) => {
  const history = useHistory();
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
    history.push("/submitted");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Form Submission
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                fullWidth
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Date of Birth"
                type="date"
                fullWidth
                required
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                fullWidth
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="outlined" fullWidth>
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
