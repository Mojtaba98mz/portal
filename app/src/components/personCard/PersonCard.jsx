import React from "react";
import styles from "./personCard.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import PropTypes from "prop-types"
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
  const navigate=useNavigate()
  // console.log(param);
  return (
    <div className={styles.container}>
      <div className={styles.cardText}>
        <p>{personalCode}</p>
        <p className={styles.header}>:شماره پرسنلی </p>
      </div>
      <p className={styles.header}>نام کارمند ارزیابی شونده</p>
      <p >{fullName}</p>
      <div div className={styles.cardText}>
        <p>{role} </p>
        <p className={styles.header}> :نقش</p>
      </div>
      <p className={styles.header}>جمع نمرات:{totallScore}</p>
      <p className={styles.header}>نمره نهایی:{finalScore}</p>
      <p className={styles.header}>شغل:  {job}</p>
      <p className={styles.header}>یگان:{organization}</p>
        <Button variant="contained" color="primary" sx={hover} onClick={()=>navigate(`/panel/evaluations/${param.id}/${personalCode}`)}>
          <Typography variant="body1" fontFamily="YeKan">
            ارزیابی
          </Typography>
        </Button>
    </div>
  );
};

PersonCard.propTypes={
  fullName:PropTypes.string,
  personalCode:PropTypes.string,
  role:PropTypes.arrayOf(),
  totallScore:PropTypes.string,
  finalScore:PropTypes.string,
  job:PropTypes.string,
  organization:PropTypes.string,
}

export default PersonCard;
