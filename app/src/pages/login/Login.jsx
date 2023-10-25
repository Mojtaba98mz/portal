import React, { useState } from "react";
import styles from "./login.module.css";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import pattern from "../../assets/pics/pattern.jpg";
import ajaLogo from "../../assets/pics/ajalogoTransparent.png"

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  console.log("username:", userName, "password:", password);
  const sendLoginData = () => {
    axios
      .post("http://192.168.1.1/api/auth/signin", { userName, password })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.backgroundPage}>
      <div className={styles.container}>
        <div className={styles.Pic}>
          <div className={styles.loginWrapper}>
            <div className={styles.pattern}></div>
            <div className={styles.ajalogo}>
              <img src={ajaLogo} width="250px"/>
              <h2 style={{color:"white"}}>کانون مرکزی ارزیابی و رشد سرمایه های انسانی</h2>
            </div>
          </div>
        </div>
        <div className={styles.inputsContent}>
          <TextField
            variant="standard"
            label="نام کاربری"
            size="small"
            style={{ width: "70%" }}
            onChange={(e) => setUserName(e.target.value)}
          ></TextField>
          <TextField
            variant="standard"
            type="password"
            label="رمزعبور"
            size="small"
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginTop: 20, width: "70%", fontFamily: "Yekan" }}
          ></TextField>
          <Button
            variant="contained"
            type="button"
            size="medium"
            onClick={sendLoginData}
            style={{
              marginTop: 60,
              background:
                "linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%)",
              width: "70%",
              fontSize: 20,
              color: "black",
            }}
          >
            ورود
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
