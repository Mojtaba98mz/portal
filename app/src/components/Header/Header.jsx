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
                loginout
              </Button>
            ) : (
              <Link to={"/login"}>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  type="button"
                >
                  login
                </Button>
              </Link>
            )}
            {token && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Link to="/panel">
                  <MdOutlineAssignment size="30px" color="rgba(0,0,0,0.5)" style={{marginInline:"15px",marginTop:"5px" }}/>
                </Link>
                <Avatar></Avatar>
                <Typography variant="inherit" color="black">
                  {userData?.sub}
                </Typography>
              </Box>
            )}
            <Box sx={{ marginLeft: "auto" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography color="black" style={{ paddingRight: 20 }}>
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
