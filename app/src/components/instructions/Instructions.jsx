import React from "react";
import styles from "./instructions.module.css";
import documentBlue from "../../assets/svg/document.svg";
import documentGreen from "../../assets/svg/documentGreen.svg";
import documentskyBlue from "../../assets/svg/documentskyBlue.svg";
import documentRed from "../../assets/svg/documentRed.svg";

const Instructions = ({ color , title}) => {
  const documentColor = {
    red: documentRed,
    green: documentGreen,
    skyblue: documentskyBlue,
    blue: documentBlue,
  };
  const filtered = Object.keys(documentColor).filter((key) => key == color);
  const pic = documentColor[filtered[0]];

  return (
    <div className={styles.box}>
      <div className={styles.card}>
        <div className={styles.content}>
          <div>
            <img src={pic} width="70px" />
          </div>
          <div>
          <h5>دستورالعمل</h5>
          <h5>{title}</h5>
          </div>
          <div>
            <button className={styles.downloadButton} type="button" >
              دریافت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
