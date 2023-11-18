import React from "react";
import styles from "./panel.module.css";
import Header from "../../components/Header/Header";
import { Box, Container, Grid } from "@mui/material";
import RightPanel from "../../components/rightpanel/RightPanel";
import Login from "../login/Login";
import { localStorageToParse } from "../../utils/functions";
import PanelRoutes from "./PanelRoutes/PanelRoutes";
const Panel = () => {
  const token = localStorageToParse("Token");
  console.log(token);
  return (
    <>
      {token?.id_token ? (
        <>
          <Header></Header>
          <Container sx={{ height: "100vh" }}>
            <Box
              sx={{
                flexGrow: 1,
                width: "100%",
                height: "100%",
                // border: "1px solid red",
              }}
            >
              <Grid
                container
                spacing={1}
                layout={"row"}
                style={{
                  marginTop: "80px",
                  height: "calc(100% - 80px)",
                  padding: "10px",
                }}
              >
                <Grid item xs={12} md={10} >
                  <div
                    style={{
                      // background: "yellow",
                      width: "100%",
                      height: "100%",
                      boxShadow: "5px 5px 15px rgba(0,0,0,0.4)",
                      borderRadius: "10px",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <PanelRoutes></PanelRoutes>
                  </div>
                </Grid>
                <Grid item xs={12} md={2} sx={{ width: "300px" }}  >
                  <div style={{ width: "100%", height: "100%" }}>
                    <RightPanel />
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </>
      ) : (
        <Login></Login>
      )}
    </>
  );
};

export default Panel;
