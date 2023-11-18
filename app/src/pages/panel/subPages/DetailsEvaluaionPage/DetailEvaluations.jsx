import React from "react";
import { useParams } from "react-router-dom";
import PersonCard from "../../../../components/personCard/PersonCard";
import styles from "./DetailsEvaluation.module.css"
import { Box, Pagination, PaginationItem, Stack } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const DetailEvaluations = () => {
  const params = useParams();
  const code = params.id;
  const paginationHandler=(event,value)=>{
    console.log(value)

  }
  console.log(code);
  return (
    <>
      <div className={styles.container}>
        <PersonCard personalCode={"1234567"} totallScore={"0"} finalScore={"20"} organization={"فلان"} fullName={"امیر مقراضی"} role={"همتراز"} job={"مدیر"} />
        <PersonCard personalCode={"1234567"} totallScore={"0"} finalScore={"20"} organization={"فلان"} fullName={"امیر مقراضی"} role={"همتراز"} job={"مدیر"} />
        <PersonCard personalCode={"1234567"} totallScore={"0"} finalScore={"20"} organization={"فلان"} fullName={"امیر مقراضی"} role={"همتراز"} job={"مدیر"} />
        <PersonCard personalCode={"1234567"} totallScore={"0"} finalScore={"20"} organization={"فلان"} fullName={"امیر مقراضی"} role={"همتراز"} job={"مدیر"} />
        <PersonCard personalCode={"1234567"} totallScore={"0"} finalScore={"20"} organization={"فلان"} fullName={"امیر مقراضی"} role={"همتراز"} job={"مدیر"} />
      </div>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center",marginBottom:"20px" }}>
        <Stack spacing={2} >
          <Pagination count={10} color="primary" variant="outlined" sx={{ direction: "rtl" }} shape="circular" renderItem={(item) => (<PaginationItem
            slots={{ next: ArrowBackIosNewIcon, previous: ArrowForwardIosIcon }}
            {...item}
          />)}
            onChange={paginationHandler}
          />
        </Stack>
      </Box>
    </>
  );
};

export default DetailEvaluations;
