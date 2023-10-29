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

const Header = () => {
  // const { token, username } = useSelector((state) => state.auth);
  const navigate=useNavigate()
  const userData = localStorage.getItem("userData");
  const token = localStorage.getItem("Token");
  let username1;
  let token1;
  if (userData) {
    const { sub } = JSON.parse(userData);
    username1 = sub;
  }
  if (token) {
    const Token = JSON.parse(token);
    token1 = Token;
  }
  
  const logout = () => {
    if (username1 || token1) {
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
            {token1 || username1 ? (
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
            {token1 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Avatar></Avatar>
                <Typography variant="inherit" color="black">
                  {username1}
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
