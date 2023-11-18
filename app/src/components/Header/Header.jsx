import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ajaLogo from "../../assets/pics/ajalogoTransparent.png";
import Headerbackground from "../../assets/pics/headerBackground.png";
import {MdOutlineAssignment} from "react-icons/md"
import {AiOutlineHome} from "react-icons/ai"
import { localStorageToParse } from "../../utils/functions";

const Header = () => {
  const navigate=useNavigate()
  const userData = localStorageToParse("userData")
  const token=localStorageToParse("Token")
  
  const logout = () => {
    if (userData?.sub || token) {
      localStorage.removeItem("Token");
      localStorage.removeItem("userData");
      navigate("/")
    }
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <AppBar
        variant="elevation"
        position="fixed"
        color="transparent"
        sx={{
          backdropFilter: "blur(30px)",
          backgroundImage: `url(${Headerbackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            {token || userData?.sub ? (
              <Button
                variant="outlined"
                color="error"
                size="small"
                type="button"
                onClick={logout}
              >
                خروج
              </Button>
            ) : (
              <Link to={"/login"}>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  type="button"
                >
                  ورود
                </Button>
              </Link>
            )}
            {token && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent:"space-around",
                  width:"160px",
                  // border:"1px solid black"
                }}
              >
                <Link to="/panel/evaluations">
                  <MdOutlineAssignment size="25px" color="rgba(0,0,0,0.5)" style={{marginInline:"15px",marginTop:"5px" }}/>
                </Link>
                <Link to="/">
                  <AiOutlineHome size="25px" color="rgba(0,0,0,0.5)" style={{margin:"2px 5px 2px 0px" }}></AiOutlineHome>
                </Link>
                <Avatar></Avatar>
                <Typography variant="inherit" color="black">
                  {userData?.sub}
                </Typography>
              </Box>
            )}
            <Box sx={{ marginLeft: "auto" }} md={0}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography color="black" sx={{display:{xs:"none",sm:"block"}}} style={{ paddingRight: 18,fontFamily:"YeKanBakhMedium" }} >
                  کانون مرکزی ارزیابی و رشد سرمایه های انسانی{" "}
                </Typography>
                <img
                  src={ajaLogo}
                  width="70px"
                  style={{ paddingTop: 0, paddingBottom: 0 }}
                />
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
