import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/Home/Home";
import Panel from "./pages/panel/Panel";

function App() {
  return (
    <>
      <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/panel/*" element={<Panel />}></Route>
            <Route path="/" element={<Home></Home>} />
          </Routes>
      </div>
    </>
  );
}

export default App;
