import { FormControl, FormHelperText, TextField } from "@mui/material";

export type TextInputType = {
  label: string;
  id?: string;
  name?: string;
  required?: boolean;
  helper?: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler;
};

const TextInput = (props: TextInputType) => {
  return (
    <>
      <TextField
        label={props.label}
        id={props.id}
        variant="standard"
        required={props.required}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
      {props.helper ? (
        <FormHelperText id="helper">{props.helper}</FormHelperText>
      ) : (
        <></>
      )}
    </>
  );
};

export default TextInput;
