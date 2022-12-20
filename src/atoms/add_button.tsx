import { Button } from "@material-ui/core";

type AddButtonType = {
  text: string;
};

const AddButton = (props: AddButtonType): JSX.Element => {
  const handleClick = () => {
    console.log("... clicked add button");
  };

  return <Button onClick={() => handleClick()}>{props?.text}</Button>;
};

export default AddButton;
