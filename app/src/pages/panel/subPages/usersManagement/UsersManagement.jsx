import React from "react";
import DataGridTable from "../../../../components/table/DataGrid";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import {grey}from "@mui/material/colors"
const UsersManagement = () => {
  return (
    <Container>
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >

      <Typography variant="h5" marginY="30px" sx={{fontFamily:"YeKan"}} >
        مدیریت کاربران
      </Typography>
      <DataGridTable></DataGridTable>
      <Box
        sx={{
          border:`1px solid ${grey[300]}`,
          width: "100%",
          marginY: 5,
          height: "250px",
          display: "flex",
          flexDirection: "column",
          borderRadius:"15px",
          padding:"10px",
          alignItems:"center"
        }}
      >
        <Typography variant="body1" sx={{direction:"rtl", fontFamily:"Yekan"}}>افزودن کاربر جدید</Typography>

        <TextField
          variant="outlined"
          size="small"
          label="کدملی"
          sx={{width:"70%", mt:4}}
        ></TextField>
        <TextField variant="outlined" size="small" label="رمزعبور" sx={{width:"70%",mt:2}}></TextField>
        <Button variant="contained" color="success" sx={{mt:3}} ><Typography>افزودن</Typography></Button>
      </Box>
    </Box>
    </Container>
  );
};

export default UsersManagement;
