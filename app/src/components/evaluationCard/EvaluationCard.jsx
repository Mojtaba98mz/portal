import React from 'react'
import styles from "./evaluationCard.module.css"
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const EvaluationCard = ({startDate,endDate,organizationName,code,evaluationYear}) => {
  const hover={
    "&:hover":{
      backgroundColor:"red"
    }
  }
  return (
    <div className={styles.card}>
      <div>
        <h4>عنوان دوره</h4>
        <p></p>
      </div>
      <div>
        <p>سال ارزیابی: 1398</p>

      </div>
      <div>
        <p>دوره ارزیابی به ازای هر سال: 2</p>

      </div>
      <div>
        <p>تاریخ شروع :1398/01/01</p>
      </div>

      <p>تاریخ خاتمه :1398/07/01</p>
      <p>نام سازمان : یگان یک آجا</p>
      <p>کددوره:cd1465-df</p>
      <Link to={`/panel/evaluations/${code}`}>
        <Button variant='contained'color='primary' sx={hover} ><Typography variant='body1' fontFamily="YeKan"> مشاهده جزییات</Typography></Button>
      </Link>
    </div>
  )
  }

export default EvaluationCard
