import { Button } from "@material-ui/core";

type MainButtonType = {
  text: string;
};

const MainButton = (props: MainButtonType): JSX.Element => {
  return <Button>{props?.text}</Button>;
};

export default MainButton;
