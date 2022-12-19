import { Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <Typography variant="h3">Oops!</Typography>
      <Typography>Sorry, an unexpected error has occoured.</Typography>
      {/* <i>{error.statusText || error.message}</i> */}
    </div>
  );
};

export default ErrorPage;
