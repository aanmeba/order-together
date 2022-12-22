import { Routes, Route } from "react-router-dom";
import "./app.css";

import Header from "./components/header";
import Home from "./pages/home";
import Login from "./pages/login";
import Order from "./pages/order";
import { UserAuth } from "./service/auth_service";

function App(): JSX.Element {
  // const userAuth = new UserAuth();
  const userAuth = {
    signUp: (x: string, y: string) => console.log("singup"),
    logIn: (x: string, y: string) => console.log("login"),
    logOut: () => console.log("logOUt"),
  };

  // console.log(userAuth.signUp("test", "1234"));

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="new"
          element={<Login locPath="new" signUp={userAuth.signUp} />}
        />
        <Route
          path="join"
          element={<Login locPath="join" logIn={userAuth.logIn} />}
        />
        <Route path="order" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
