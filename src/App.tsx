import { Routes, Route } from "react-router-dom";
import "./app.css";
import Header from "./components/header";
import Home from "./pages/home";
import Login from "./pages/login";
// import ErrorPage from "./pages/error-page";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="new" element={<Login locPath="new" />} />
        <Route path="join" element={<Login locPath="join" />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
