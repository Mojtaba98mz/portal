import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/Home/Home";
import Panel from "./pages/panel/Panel";
import { Toaster } from "react-hot-toast";
import { localStorageToParse } from "./utils/functions";
import axios from "axios";

function App() {
  // const baseURL = `${import.meta.env.REACT_APP_BASE_URL}`
  // const axiosInstance = axios.create({
  //   baseURL:"http://192.168.55.82:8090/api",
  // });
  //
axios.defaults.baseURL="http://192.168.55.82:8090/api"
// axios.defaults.baseURL=`${import .meta.env.REACT_APP_BASE_URL}`

  axios.interceptors.request.use(
    (config) => {
      const token=localStorageToParse("Token")
      const auth = token ? `Bearer ${token.id_token}` : '';
      config.headers['Authorization'] = auth;
      return config;
    },
    (error) => Promise.reject(error),
  );

  return (
    <>

      <div>
        <div>
          <Toaster position="top-right" reverseOrder={false}></Toaster>
        </div>
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
