import { Stack } from "@mui/system";
import TextInput from "../atoms/text_input";

const AuthForm = () => {
  return (
    <Stack direction="column" spacing={4} width="30rem">
      <TextInput
        label="Group Name"
        idName="group-name-input"
        helper="This group name is used for login"
        required={true}
      />
      <TextInput
        label="Group Password"
        idName="group-password-input"
        helper="This group password is used for login"
        required={true}
        type="password"
      />
    </Stack>
  );
};

export default AuthForm;
