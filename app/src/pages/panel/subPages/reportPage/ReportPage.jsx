import React, { useRef, useState } from 'react'
import styles from "./reportPage.module.css"
import { Box, Button, Chip, Container, Divider, Input, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, TextareaAutosize, Typography } from '@mui/material'
import { green, grey, blueGrey } from "@mui/material/colors"
import PrintIcon from '@mui/icons-material/Print';
import EditIcon from '@mui/icons-material/Edit';
import ReactToPrint from 'react-to-print'
import TableCustomize from './TableCustomize';
const ReportPage = () => {
  const componentRef = useRef()
  const [showModal, setShowModal] = useState(false)
  const data = new Date()
  const handleClose = () => {
    setShowModal(false)

  }
  const handleOpen = () => {
    setShowModal(true)
  }
  const dateOption = { month: "long", day: "numeric", weekday: "long", year: "numeric", }

  const table3Head = [
    "نتیجه مورد انتظار",
    "زمان بندی اقدامات",
    "اقدامات",
    "حوزه"
  ]
  const table3Rows = [
    "row 1",
    "row2",
    "row3",
    "row4"
  ]
  const table1Head = [
    "یگان عمده",
    "یگان جزء",
    "فرمانده با واسطه",
    "شغل سازمانی",
    "شغل عملی",
    "فرمانده مستفیم"
  ]
  const table1Row = [
    "row1",
    "row2",
    "row3",
    "row4",
    "row5",
    "row6"
  ]

  return (
    <Box style={{ width: "100%" }}>

      <div className={styles.container} ref={componentRef}>
        <Container>
          <Box sx={{ border: "1px solid gray", borderRadius: "10px", paddingY: "20px", marginBottom: "30px", position: "relative" }}>
            <Chip variant='filled' color="info" sx={{ marginLeft: '45%', position: "absolute", top: `-17px` }} label={<Typography sx={{ textAlign: "center" }} variant='h5'>کارنامه</Typography>}></Chip>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", marginY: "10px", paddingX: "50px", width: "80%", marginX: "auto" }}>
              <Chip variant='outlined' color="success" label={<Typography>عنوان دوره ارزشیابی: {1}</Typography>}></Chip>
              <Chip variant='outlined' color='primary' label={<Typography>مشخصات ارزیابی شونده: {1}</Typography>} ></Chip>
            </Box>
            <Chip variant='outlined' sx={{ marginLeft: "65%" }} color="error" label={<Typography>رده: {1}</Typography>}></Chip>
            <TableCustomize tableHead={table1Head} tableRow={table1Row} widthTable={"90%"}></TableCustomize>
            <Box width="100%" display="flex" justifyContent="center" marginY="60px">
              <TableContainer component={Paper} sx={{ width: "80%" }} >
                <Table>
                  <TableHead sx={{ background: blueGrey[500] }} >
                    <TableRow >
                      <TableCell align="center" sx={{ color: "white" }} >رتبه اجماع در حوزه ی اصلی شایستگی</TableCell>
                      <TableCell align="center" sx={{ color: "white" }}>حوزه های اصل  شایستگی</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align='center'>Row 1</TableCell>
                      <TableCell align="center">Row 1</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Row 2</TableCell>
                      <TableCell align="center">Row 2</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            <TableCustomize tableRow={table3Rows} tableHead={table3Head} widthTable={"90%"}></TableCustomize>

            <Box sx={{ display: "flex", justifyContent: "space-evenly", marginY: "10px" }}>
              <Chip variant='outlined' color="success" label={<Typography>مشاغل پیشنهادی-کوتاه مدت: {1}</Typography>}></Chip>
              <Chip variant='outlined' color="success" label={<Typography>مشاغل پیشنهادی: {1}</Typography>}></Chip>
              <Chip variant='outlined' color="success" label={<Typography>نمره نهایی: {1}</Typography>}></Chip>
              <Chip variant='outlined' color="success" label={<Typography>نمره نهایی اجماع: {1}</Typography>}></Chip>
            </Box>

          </Box>
          <Modal open={showModal} onClose={handleClose}>
            <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "Translate(-50%,-50%)", borderRadius: "10px", width: "400px", height: "300px", backgroundColor: "white" }}>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>

                <Box sx={{ display: "flex" }}>
                  <TextareaAutosize></TextareaAutosize>
                  <Typography sx={{ fontFamily: "Yekan" }}>: علت اعتراض  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <TextField variant='outlined' color='error' size='small' sx={{ width: "50%" }} value={data.toLocaleDateString("fa-IR", dateOption)}></TextField>
                  <Typography sx={{ fontFamily: "Yekan" }}> :تاریخ اعتراض  </Typography>
                </Box>

                <Button variant='contained' color='success' sx={{ mt: 3 }} >ثبت</Button>
              </Box>
            </Box>
          </Modal>
        </Container>
      </div>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", marginY: "40px" }}>
        <Button variant='contained' color='primary' endIcon={<EditIcon></EditIcon>} onClick={() => handleOpen()} sx={{ "&:hover": { backgroundColor: green[500] } }} >ثبت اعتراض</Button>

        <ReactToPrint trigger={() => {
          return <Button variant='contained' color='primary' endIcon={<PrintIcon></PrintIcon>} sx={{ "&:hover": { backgroundColor: green[500] } }} >پرینت</Button>
        }}
          content={() => componentRef.current}
        />
      </Box>
    </Box>
  )
}

export default ReportPage
