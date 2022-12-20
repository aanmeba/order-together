import { Grid, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import MainButton from "../atoms/main_button";

const Home = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Typography variant="h2">Order Together</Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        <Grid item>
          <MainButton text="📝 New" origin="new" />
        </Grid>
        <Grid item>
          <MainButton text="🔍 Join" origin="join" />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Home;
