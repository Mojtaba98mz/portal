import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
import {
  Button,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import ajaLogo from "../../assets/pics/ajalogoTransparent.png";
import {  useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState();
  const sendData = {
    username: userName,
    password: password,
  };
  // "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjk4NjQ3NDY0LCJhdXRoIjoiUk9MRV9VU0VSIiwiaWF0IjoxNjk4NTYxMDY0fQ.drJ-vqglz1KKfJSqJW85F81tSrvlFV6uMyrkEGHVkY1-dDPe0dfYM4AakkScxWK_SQc6PUXDe7N9XSHSeVR8zQ",
  console.log(token);
  const fetchUser = async () => {
    await fetch("http://192.168.55.82:8080/api/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(sendData),
    })
      .then((res) => res.json())
      .then((data) => setToken(data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    if (token) {
      const jwtData = jwtDecode(token);
      localStorage.setItem("userData", JSON.stringify(jwtData));
      localStorage.setItem("Token", JSON.stringify(token));
      console.log(jwtData);
      navigate("/");
    }
  }, [token]);
  const theme = createTheme({
    typography: {
      fontSize: 16, // default font size
      fontFamily: "iranyekanwebregular", // default font family
      // You can also define custom variants and their styles
      h6: {
        fontSize: 14,
        fontWeight: "bold",
      },
      body1: {
        fontSize: 14,
      },
    },
  });

  return (
    <div className={styles.backgroundPage}>
      <div className={styles.container}>
        <div className={styles.Pic}>
          <div className={styles.loginWrapper}>
            <div className={styles.pattern}></div>
            <div className={styles.ajalogo}>
              <img src={ajaLogo} width="250px" />
              <h2 style={{ color: "white" }}>
                کانون مرکزی ارزیابی و رشد سرمایه های انسانی
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.inputsContent}>
          <ThemeProvider theme={theme}>
            <TextField
              variant="standard"
              label="نام کاربری"
              InputLabelProps={{
                TypographyComponent: Typography,
                variant: "h6",
              }}
              size="small"
              style={{ width: "70%" }}
              onChange={(e) => setUserName(e.target.value)}
            ></TextField>
          </ThemeProvider>

          <ThemeProvider theme={theme}>
            <TextField
              variant="standard"
              type="password"
              label="رمزعبور"
              size="small"
              InputLabelProps={{
                TypographyComponent: Typography,
                variant: "h6",
              }}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginTop: 20, width: "70%", fontFamily: "Yekan" }}
            ></TextField>
          </ThemeProvider>
          <Button
            variant="contained"
            type="button"
            size="medium"
            onClick={fetchUser}
            style={{
              marginTop: 60,
              background:
                "linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)",
              width: "70%",
              fontSize: 20,
              color: "black",
            }}
          >
            <Typography>ورود</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
