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
      <PersonCard personalCode={"1234567"} totallScore={"0"} finalScore={"20"} organization={"فلان"} fullName={"امیر مقراضی"} role={"همتراز"} job={"مدیر"}/>
      <PersonCard personalCode={"1234567"} totallScore={"0"} finalScore={"20"} organization={"فلان"} fullName={"امیر مقراضی"} role={"همتراز"} job={"مدیر"}/>
      <PersonCard personalCode={"1234567"} totallScore={"0"} finalScore={"20"} organization={"فلان"} fullName={"امیر مقراضی"} role={"همتراز"} job={"مدیر"}/>
      <PersonCard personalCode={"1234567"} totallScore={"0"} finalScore={"20"} organization={"فلان"} fullName={"امیر مقراضی"} role={"همتراز"} job={"مدیر"}/>
      <PersonCard personalCode={"1234567"} totallScore={"0"} finalScore={"20"} organization={"فلان"} fullName={"امیر مقراضی"} role={"همتراز"} job={"مدیر"}/>
    </div>
  );
};

export default DetailEvaluations;
