import React from "react";
import styles from "./panel.module.css";
import Header from "../../components/Header/Header";
import { Box, Container, Grid } from "@mui/material";
import RightPanel from "../../components/rightpanel/RightPanel";
import EvaluationCard from "../../components/evaluationCard/EvaluationCard";
const Panel = () => {
  return (
    <>
      <Header />
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
            <Grid item xs={10}>
              <div
                style={{
                  // background: "yellow",
                  width: "100%",
                  height: "100%",
                  boxShadow: "5px 5px 15px rgba(0,0,0,0.4)",
                  borderRadius: "10px",
                  display:"flex",
                  justifyContent:"space-around",
                  alignItems:"center",
                  flexWrap:"wrap"
                }}
              >
                <EvaluationCard/>
                <EvaluationCard/>
                <EvaluationCard/>
                <EvaluationCard/>
                <EvaluationCard/>
                <EvaluationCard/>
                <EvaluationCard/>
                <EvaluationCard/>
                <EvaluationCard/>
                <EvaluationCard/>

              </div>
            </Grid>
            <Grid item xs={2} sx={{ width: "300px" }}>
              <div style={{ width: "100%", height: "100%" }}>
                <RightPanel />
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Panel;
