import React, { useState } from "react";
import DataGridTable from "../../../../components/table/DataGrid";
import { Box, Button, Container, IconButton, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from "axios";
const UsersManagement = () => {
  const [nationalCode, setNationalCode] = useState();
  const [password, setPassword] = useState();
  const [showPassword,setShowPassword]=useState(false)
  // console.log(showPassword)
  const postData={
    nationalCode,
    password
  }
  const addUserHandler=()=>{
    axios.post(url,postData)
    .then(res=>console.log(res))
    .catch((error)=>console.log(error))

  }
  // console.log("sna",nationalCode,"password:",password)
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
        <Typography variant="h5" marginY="30px" sx={{ fontFamily: "YeKan" }}>
          مدیریت کاربران
        </Typography>
        <DataGridTable></DataGridTable>
        <Box
          sx={{
            border: `1px solid ${grey[300]}`,
            // boxShadow:"4px 4px 14px gray",
            width: "100%",
            marginY: 5,
            height: "250px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "15px",
            padding: "10px",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body1"
            sx={{ direction: "rtl", fontFamily: "Yekan" }}
          >
            افزودن کاربر جدید
          </Typography>

          <TextField
            variant="outlined"
            size="small"
            label="کدملی"
            sx={{ width: "70%", mt: 4 }}
            onChange={(e)=>{setNationalCode(e.target.value)}}
          ></TextField>
          <Box sx={{width:"70%",margin:"auto",position:"relative"}}>
          <TextField
          
            type={showPassword?"text":"password"}
            variant="outlined"
            size="small"
            label="رمزعبور"
            sx={{ width: "100%", mt: 2 ,position:"relative"}}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></TextField>
            <IconButton sx={{position:"absolute",top:"40%",ml:2,cursor:"pointer"}} onClick={()=>setShowPassword(!showPassword)}>
          <VisibilityIcon />
            </IconButton>
          </Box>
          <Button variant="contained" color="success" sx={{ mt: 3 }} onClick={()=>addUserHandler()}>
            <Typography>افزودن</Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default UsersManagement;
