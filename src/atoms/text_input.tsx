import { FormControl, FormHelperText, TextField } from "@mui/material";
import { useState } from "react";

export type TextInputType = {
  label: string;
  id?: string;
  required?: boolean;
  helper?: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler;
};

const TextInput = (props: TextInputType) => {
  // const [inputValue, setInputValue] = useState<string>("");

  return (
    <FormControl>
      <TextField
        label={props.label}
        id={props.id}
        variant="standard"
        required={props.required}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
      <FormHelperText id="helper">{props.helper}</FormHelperText>
    </FormControl>
  );
};

export default TextInput;
