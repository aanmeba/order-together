import { Grid, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import React from "react";
import "./app.css";
import AddOrder from "./components/add_order";
import ViewOrder from "./components/view_order";

function App(): JSX.Element {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Typography variant="h2">Order Together</Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        <Grid item>
          <AddOrder />
        </Grid>
        <Grid item>
          <ViewOrder />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default App;
