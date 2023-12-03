import React from "react";
import EvaluationCard from "../../../../components/evaluationCard/EvaluationCard";
import styles from "./TotalEvaluation.module.css"
import ReportCard from "../../../../components/reportCard/ReportCard";

const TotalEvaluations = () => {
  return (
    <div className={styles.container}>
      <EvaluationCard startDate={"1398/01/01"} endDate={"1390/01/01"}organization={"فلان یگان"} evaluationYear={"1398"} code={"dfcdef23"}></EvaluationCard>
      <ReportCard></ReportCard>
    </div>
  );
};

export default TotalEvaluations;
