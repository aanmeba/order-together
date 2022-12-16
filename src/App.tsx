import { Grid, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import React from "react";
import "./app.css";
import MainButton from "./atoms/main_button";

function App(): JSX.Element {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Typography variant="h2">Order Together</Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        <Grid item>
          <MainButton text="📝 Create an order sheet" origin="create" />
        </Grid>
        <Grid item>
          <MainButton text="🔍 View the order sheet" origin="view" />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default App;
