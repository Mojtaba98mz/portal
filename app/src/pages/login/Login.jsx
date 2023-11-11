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
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import axios from "axios";
import {MdOutlineLockReset} from "react-icons/md"
// import {captcha} from "../../assets/captcha"

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState();
  const [answerCaptcha, setAnswerCaptcha] = useState("");
  const [captcha, setCaptcha] = useState("");
  // console.log("answerCaptcha:", answerCaptcha);
  // console.log("captcha:", captcha);
  // "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjk4NjQ3NDY0LCJhdXRoIjoiUk9MRV9VU0VSIiwiaWF0IjoxNjk4NTYxMDY0fQ.drJ-vqglz1KKfJSqJW85F81tSrvlFV6uMyrkEGHVkY1-dDPe0dfYM4AakkScxWK_SQc6PUXDe7N9XSHSeVR8zQ",
  const sendData = {
    username: userName,
    password: password,
    captchaAnswer: answerCaptcha,
    encryptedCaptchaAnswer:captcha.answer,
  };
  // console.log(token);
  const getCapcha = async () => {
    await axios
      .get("/captcha")
      .then((res) => {
        setCaptcha(res.data);
      })
      .catch((error) => console.log(error));
  };

  const fetchUser = async () => {
    // await fetch("http://192.168.55.82:8090/api/authenticate", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json", // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: JSON.stringify(sendData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => setToken(data))
    //   .catch((error) => console.log(error));
    await axios.post("/authenticate",sendData)
    .then((res)=>setToken(res.data))
    .catch((error)=>{
      console.log(error.response.data)
    if(error?.response?.data=="invalid-credentials"){
      toast.error("نام کاربری یا رمزعبور وجود ندارد یا اشتباه وارد شده است",{
        duration: 4000,
        style: { fontFamily: "Yekan", fontSize: "17px" },
        })
    }else if(error?.response?.data=="invalid-captcha"){
        toast.error("کپچا اشتباه وارد شده است",{
        duration: 4000,
        style: { fontFamily: "Yekan", fontSize: "17px" },
        })
      }else{
        console.log(error)
      }
    })
  };
  useEffect(() => {
    getCapcha();
    if (token?.id_token) {
      const jwtData = jwtDecode(token.id_token);
      localStorage.setItem("userData", JSON.stringify(jwtData));
      localStorage.setItem("Token", JSON.stringify(token));
      console.log(jwtData);
      toast.success("ورود با موفقیت انجام شد", {
        duration: 4000,
        style: { fontFamily: "Yekan", fontSize: "17px" },
      });
      navigate("/panel/evaluations");
    }
    // console.log("res:",token?.response?.data)

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
          <div className={styles.captchaContainer}>
          <img
            src={`data:image/jpeg;base64,${captcha.image}`}
            width={"180px"}
            className={styles.captcha}
            alt="captchaPic"
          />
            <MdOutlineLockReset size="28" onClick={()=>{getCapcha()}} />
          </div>
          <input 
            onChange={(e) => {
              setAnswerCaptcha(e.target.value);
            }}
            className={styles.answerCaptcha}
          />

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
