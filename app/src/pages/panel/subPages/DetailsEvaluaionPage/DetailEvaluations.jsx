import React from "react";
import { useParams } from "react-router-dom";
import PersonCard from "../../../../components/personCard/PersonCard";
import styles from "./DetailsEvaluation.module.css"

const DetailEvaluations = () => {
  const params = useParams();
  const code = params.id;
  console.log(code);
  return (
    <div  className={styles.container}>
      <PersonCard/>
      <PersonCard/>
      <PersonCard/>
      <PersonCard/>
    </div>
  );
};

export default DetailEvaluations;
