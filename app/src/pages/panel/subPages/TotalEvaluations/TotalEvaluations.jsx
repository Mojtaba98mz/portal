import React from "react";
import EvaluationCard from "../../../../components/evaluationCard/EvaluationCard";
import styles from "./TotalEvaluation.module.css"

const TotalEvaluations = () => {
  return (
    <div className={styles.container}>
      <EvaluationCard></EvaluationCard>
      <EvaluationCard></EvaluationCard>
      <EvaluationCard></EvaluationCard>
      <EvaluationCard></EvaluationCard>
      <EvaluationCard></EvaluationCard>
      <EvaluationCard></EvaluationCard>
      <EvaluationCard></EvaluationCard>
      <EvaluationCard></EvaluationCard>
      <EvaluationCard></EvaluationCard>
    </div>
  );
};

export default TotalEvaluations;
