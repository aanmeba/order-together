import { FormControl, FormHelperText, TextField } from "@mui/material";

export type TextInputType = {
  label: string;
  idName?: string;
  required?: boolean;
  helper?: string;
  type?: string;
};

const TextInput = (props: TextInputType) => {
  return (
    <FormControl>
      <TextField
        label={props.label}
        id={props.idName}
        variant="standard"
        required={props.required}
        type={props.type}
      />
      <FormHelperText id="helper">{props.helper}</FormHelperText>
    </FormControl>
  );
};

export default TextInput;
