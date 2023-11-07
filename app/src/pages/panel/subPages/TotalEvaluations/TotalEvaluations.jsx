import React from "react";
import EvaluationCard from "../../../../components/evaluationCard/EvaluationCard";
import styles from "./TotalEvaluation.module.css"

const TotalEvaluations = () => {
  return (
    <div className={styles.container}>
      <EvaluationCard startDate={"1398/01/01"} endDate={"1390/01/01"}organization={"فلان یگان"} evaluationYear={"1398"} code={"dfcdef23"}></EvaluationCard>
    </div>
  );
};

export default TotalEvaluations;
