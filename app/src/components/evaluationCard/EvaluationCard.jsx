import React from "react";
import styles from "./evaluationCard.module.css";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const EvaluationCard = (props) => {
const {startDate,endDate,organization,code,evaluationYear}=props
  const hover = {
    "&:hover": {
      backgroundColor: "red",
    },
  };
  return (
    <div className={styles.card}>
      <div>
        <h4>عنوان دوره</h4>
        <p></p>
      </div>
      <div>
        <p>سال ارزیابی: {evaluationYear}</p>
      </div>
      <div>
        <p>دوره ارزیابی به ازای هر سال: 2</p>
      </div>
      <div>
        <p>تاریخ شروع :{startDate}</p>
      </div>

      <p>تاریخ خاتمه :{endDate}</p>
      <p>نام سازمان : {organization}  </p>
      <p>کددوره:{code}</p>
      <Link to={`/panel/evaluations/${code}`}>
        <Button variant="contained" color="primary" sx={hover}>
          <Typography variant="body1" fontFamily="YeKan">
            {" "}
            مشاهده جزییات
          </Typography>
        </Button>
      </Link>
    </div>
  );
};
EvaluationCard.propTypes = {
  startDate: PropTypes.string,
  endDate:PropTypes.string,
  organization:PropTypes.string,
  code:PropTypes.string,
  evaluationYear:PropTypes.string,
};

export default EvaluationCard;
