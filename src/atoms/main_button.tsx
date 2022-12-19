import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

type MainButtonType = {
  text: string;
  origin: Origin;
};

type Origin = "new" | "join";

const MainButton = (props: MainButtonType): JSX.Element => {
  const navigate = useNavigate();
  const handleClick = (origin: Origin) => {
    return navigate(`/${origin}`);
  };

  return (
    <Button onClick={() => handleClick(props?.origin)}>{props?.text}</Button>
  );
};

export default MainButton;
