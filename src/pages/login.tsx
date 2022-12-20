import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import AuthForm from "../components/auth_form";

const Login = (props: { locPath: String }) => {
  return (
    <Stack alignItems="center" justifyContent="center" height="70vh">
      <Typography variant="h3">
        {props.locPath === "new" ? "Create a new group" : "join..."}
      </Typography>
      <AuthForm />
    </Stack>
  );
};

export default Login;
