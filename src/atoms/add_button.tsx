import { Button } from "@material-ui/core";
import React from "react";

type AddButtonType = {
  label: string;
  style?: string;
  variant?: ButtonVariantType;
  onClick: (event: React.FormEvent) => void;
};

type ButtonVariantType = "text" | "outlined" | "contained";

const AddButton = (props: AddButtonType): JSX.Element => {
  return (
    <Button
      data-testid="add-btn"
      variant={props?.variant ?? "outlined"}
      onClick={(e: React.FormEvent) => props?.onClick(e)}
    >
      {props?.label}
    </Button>
  );
};

export default AddButton;
