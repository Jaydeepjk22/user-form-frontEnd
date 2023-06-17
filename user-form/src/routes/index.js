import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import FormPage from "../components/FormPage";
import SubmittedFormsPage from "../components/SubmittedFormsPage";

const AppRoutes = () => {
  const [forms, setForms] = useState([]);

  const handleSubmitForm = async (formData) => {
    try {
      const response = await fetch("http://localhost:3000/users", {
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
      <Routes>
        <Route
          path="/"
          element={<FormPage handleSubmit={handleSubmitForm} />}
        />
        <Route
          path="/submitted"
          element={<SubmittedFormsPage forms={forms} />}
        />
      </Routes>
      <Container maxWidth="sm" style={{ marginTop: "2rem" }}>
        <Typography align="center">
          <Link to="/">Submit Form</Link> |{" "}
          <Link to="/submitted">Submitted Forms</Link>
        </Typography>
      </Container>
    </Router>
  );
};

export default AppRoutes;
