import React from "react";
import styles from "./personCard.module.css";
import { Link, useParams } from "react-router-dom";
import { Button, Typography } from "@mui/material";
const PersonCard = ({
  fullName,
  personalCode,
  role,
  totallScore,
  finalScore,
  job,
  organization,
}) => {

  const hover={
    "&:hover":{
      backgroundColor:"red"
    }
  }
  const param = useParams();
  console.log(param);
  return (
    <div className={styles.container}>
      <div className={styles.cardText}>
        <p>1234567890</p>
        <p className={styles.header}>:شماره پرسنلی </p>
      </div>
      <p className={styles.header}>نام کارمند ارزیابی شونده</p>
      <p >امیر مقراضی</p>
      <div div className={styles.cardText}>
        <p>همتراز  </p>
        <p className={styles.header}> :نقش</p>
      </div>
      <p className={styles.header}>جمع نمرات</p>
      <p className={styles.header}>نمره نهایی</p>
      <p className={styles.header}>شغل</p>
      <p className={styles.header}>یگان</p>
      <Link to={`/panel/evaluations/${param.id}/${personalCode}`}>
        <Button variant="contained" color="primary" sx={hover}>
          <Typography variant="body1" fontFamily="YeKan">
            ارزیابی
          </Typography>
        </Button>
      </Link>
    </div>
  );
};

export default PersonCard;
