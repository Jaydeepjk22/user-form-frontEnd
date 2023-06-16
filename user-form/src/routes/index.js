import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import FormPage from "../components/FormPage";
import SubmittedFormsPage from "../components/SubmittedFormsPage";

const Routes = () => {
  const [forms, setForms] = useState([]);

  const handleSubmitForm = async (formData) => {
    try {
      const response = await fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const result = await response.json();
      setForms((prevForms) => [...prevForms, result.user]);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <FormPage handleSubmit={handleSubmitForm} />
        </Route>
        <Route path="/submitted">
          <SubmittedFormsPage forms={forms} />
        </Route>
      </Switch>
      <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
        <Typography align="center">
          <Link to="/">Submit Form</Link> |{" "}
          <Link to="/submitted">Submitted Forms</Link>
        </Typography>
      </Container>
    </Router>
  );
};

export default Routes;
