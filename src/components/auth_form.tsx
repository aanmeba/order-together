import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import TextInput from "../atoms/text_input";
import { UserAuthInterface } from "../service/auth_service";

export type LoginDataType = {
  name: string;
  password: string;
};

const AuthForm = ({ signUp, logIn }: UserAuthInterface) => {
  const initialData = {
    name: "",
    password: "",
  };

  const [loginData, setLoginData] = useState<LoginDataType>(initialData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(loginData);
    signUp && signUp(loginData.name, loginData.password);
    logIn && logIn(loginData.name, loginData.password);
  };

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setLoginData({ ...loginData, [e.target.id]: target?.value });
  };

  return (
    <Stack direction="column" spacing={4} width="30rem">
      <TextInput
        label="Group Name"
        aria-label="name"
        id="name"
        helper="This group name is used for login"
        required={true}
        value={loginData.name}
        onChange={handleChange}
      />
      <TextInput
        label="Group Password"
        aria-label="password"
        id="password"
        helper="This group password is used for login"
        required={true}
        type="password"
        value={loginData.password}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit} variant="outlined">
        Submit
      </Button>
    </Stack>
  );
};

export default AuthForm;
