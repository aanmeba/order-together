import { Button } from "@material-ui/core";
import AddOrder from "../components/add_order";
import ViewOrder from "../components/view_order";

type MainButtonType = {
  text: string;
  origin: Origin;
};

type Origin = "create" | "view";

const MainButton = (props: MainButtonType): JSX.Element => {
  const handleClick = (origin: Origin) => {
    console.log(origin, "--- handleClick");
    return origin === "create" ? <AddOrder /> : <ViewOrder />;
  };

  return (
    <Button onClick={() => handleClick(props?.origin)}>{props?.text}</Button>
  );
};

export default MainButton;
