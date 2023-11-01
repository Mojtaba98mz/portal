import React from 'react'
import styles from "./evaluationCard.module.css"
import { Button, Typography } from '@mui/material'
const EvaluationCard = () => {
  const hover={
    "&:hover":{
      backgroundColor:"red"
    }
  }
  return (
    <div className={styles.card}>
    <h2>عنوان دوره</h2>
      <p>سال ارزیابی</p>
      <p>تاریخ شروع :</p>
      <p>تاریخ خاتمه :</p>
      <p>نام سازمان :</p>
      <p>کددوره:</p>
      <Button variant='contained'color='primary' sx={hover} ><Typography variant='body1' fontFamily="YeKan">شروع ارزیابی</Typography></Button>
    </div>
  )
}

export default EvaluationCard
