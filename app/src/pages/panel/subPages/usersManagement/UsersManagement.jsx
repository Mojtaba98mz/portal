import React, { useState } from "react";
import DataGridTable from "../../../../components/table/DataGrid";
import { Box, Button, Container, IconButton, TextField, Typography } from "@mui/material";
import AddUser from "./AddUser";
const UsersManagement = () => {
  // console.log(showPassword)
  // console.log("sna",nationalCode,"password:",password)
  //
  const [showModal, setShowModal] = useState(false)
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "80px"
        }}
      >
        <Typography variant="h5" marginY="30px" sx={{ fontFamily: "YeKan" }}>
          مدیریت کاربران
        </Typography>
        <Button variant="outlined" color="success" sx={{ marginLeft: "auto" }} onClick={() => { setShowModal(true) }}>افزودن کاربر</Button>
        <Box>
          <TextField variant="outlined" size="small" label="کدملی" ></TextField>
          <IconButton></IconButton>

        </Box>
        <DataGridTable></DataGridTable>
        <AddUser showModal={showModal} setShowModal={setShowModal}></AddUser>

      </Box>
    </Container>
  );
};

export default UsersManagement;
