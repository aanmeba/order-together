import { Routes, Route } from "react-router-dom";
import "./app.css";

import Header from "./components/header";
import Home from "./pages/home";
import Login from "./pages/login";
import Order from "./pages/order";
import { UserAuth } from "./service/auth_service";

function App(): JSX.Element {
  // const userAuthTestData = {
  //   signUp: (x: string, y: string) => console.log("signup -!"),
  //   logIn: (x: string, y: string) => console.log("login"),
  //   logOut: () => console.log("logOUt"),
  // };

  const userAuth = new UserAuth();
  // console.log(userAuth.signUp("test", "1234"));

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="new"
          element={<Login locPath="new" userAuth={userAuth} />}
        />
        <Route
          path="join"
          element={<Login locPath="join" userAuth={userAuth} />}
        />
        <Route path="order" element={<Order />} />
      </Routes>
    </>
  );
}

export default App;
