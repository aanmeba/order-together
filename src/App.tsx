import { Routes, Route } from "react-router-dom";
import "./app.css";
import Header from "./components/header";
import Home from "./components/home";
import New from "./components/new";
import Join from "./components/join";
// import ErrorPage from "./components/error-page";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="new" element={<New />} />
        <Route path="join" element={<Join />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
