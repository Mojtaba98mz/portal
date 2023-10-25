import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ajaLogo from "../../assets/pics/ajalogoTransparent.png";
import Headerbackground from "../../assets/pics/headerBackground.png"

const Header = () => {
  return (
    <div>
      <AppBar
        variant="elevation"
        position="fixed"
        color="transparent"
        sx={{ backdropFilter: "blur(30px)",backgroundImage:`url(${Headerbackground})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}
      >
        <Container maxWidth="lg">
          <Toolbar>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Avatar></Avatar>
              <Typography variant="inherit" color="black">
                Hi amir !!
              </Typography>
            </Box>
            <Box sx={{ marginLeft: "auto" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography color="black" style={{paddingRight:20}}>کانون مرکزی ارزیابی و رشد سرمایه های انسانی </Typography>
                <img src={ajaLogo} width="70px" style={{paddingTop:0, paddingBottom:0}}  />
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
