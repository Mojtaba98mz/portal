import React from 'react'
import styles from "./reportPage.module.css"
import { Box, Button, Chip, Container, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { green, grey ,blueGrey} from "@mui/material/colors"
const ReportPage = () => {
  return (
    <div className={styles.container}>
      <Container >

        <Box sx={{border:"1px solid gray",borderRadius:"10px", paddingY:"20px",marginBottom:"30px",position:"relative"}}>

          <Chip variant='filled' color="info" sx={{marginLeft:'45%',position:"absolute",top:`-17px`}}  label={<Typography sx={{ textAlign: "center" }} variant='h5'>کارنامه</Typography>}></Chip>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", marginY: "10px",paddingX:"50px", width:"80%",marginX:"auto" }}>
          <Chip variant='outlined' color="success" label={<Typography>عنوان دوره ارزشیابی: {1}</Typography>}></Chip>
          <Chip variant='outlined'color='primary' label={<Typography>مشخصات ارزیابی شونده: {1}</Typography>} ></Chip>
        </Box>
        <Chip variant='outlined' sx={{marginLeft:"65%"}} color="error" label={<Typography>رده: {1}</Typography>}></Chip>

        <Box width="100%" display="flex" justifyContent="center" marginY="60px">
          <TableContainer component={Paper} sx={{ width: "500px" }} >
            <Table>
              <TableHead sx={{ background: blueGrey[500] }} >
                <TableRow >
                  <TableCell align="center" sx={{color:"white"}} >رتبه آجا در حوزه ی اصلی شایستگی</TableCell>
                  <Divider orientation="vertical" flexItem  style={{height: '100%', color:"black"}}/>
                  <TableCell align="center" sx={{color:"white"}}>حوزه های اصل  شایستگی</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Row 1</TableCell>
                  <Divider orientation="vertical" flexItem  style={{height: '100%', color:"black",}} />
                  <TableCell>Row 1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Row 2</TableCell>
                  <Divider orientation="vertical" flexItem />
                  <TableCell>Row 2</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-evenly", marginY: "10px" }}>
          <Chip variant='outlined' color="success" label={<Typography>مشاغل پیشنهادی-کوتاه مدت: {1}</Typography>}></Chip>
          <Chip variant='outlined' color="success" label={<Typography>مشاغل پیشنهادی: {1}</Typography>}></Chip>
        </Box>
        <Button variant='contained' color='primary' sx={{marginY:"15px","&:hover":{backgroundColor:green[500]},marginLeft:"45%"}} >ثبت اعتراض</Button>

        </Box>
      </Container>
    </div>
  )
}

export default ReportPage
