import React from "react";
import { Grid, Typography } from "@mui/material";

const SubmittedFormsPage = ({ forms }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Submitted Forms
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {forms.length > 0 ? (
          <ul>
            {forms.map((form, index) => (
              <li key={index}>
                <Typography>{form.name}</Typography>
                <Typography>{form.dateOfBirth}</Typography>
                <Typography>{form.email}</Typography>
                <Typography>{form.phoneNumber}</Typography>
              </li>
            ))}
          </ul>
        ) : (
          <Typography align="center">No forms submitted yet.</Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default SubmittedFormsPage;
