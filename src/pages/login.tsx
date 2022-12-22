import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import AuthForm from "../components/auth_form";
import { UserAuthInterface } from "../service/auth_service";

type LoginType = { locPath: string } & UserAuthInterface;

const Login = (props: LoginType) => {
  return (
    <Stack alignItems="center" justifyContent="center" height="70vh">
      <Typography variant="h3">
        {props.locPath === "new" ? "Create a new group" : "join..."}
      </Typography>
      <AuthForm
        signUp={props.signUp}
        logIn={props.logIn}
        logOut={props.logOut}
      />
    </Stack>
  );
};

export default Login;
