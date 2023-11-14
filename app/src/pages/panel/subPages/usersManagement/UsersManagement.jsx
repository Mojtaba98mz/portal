import React, { useState } from "react";
import DataGridTable from "../../../../components/table/DataGrid";
import { Box, Button, Container, Typography } from "@mui/material";
import AddUser from "./AddUser";
import UserFilters from "./UserFilters";
import { useSelector } from "react-redux";
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
        <Button variant="outlined" color="success" sx={{ marginLeft: "auto", marginBottom: "10px" }} onClick={() => { setShowModal(true) }}>افزودن کاربر</Button>
        <UserFilters></UserFilters>
        <DataGridTable ></DataGridTable>
        <AddUser showModal={showModal} setShowModal={setShowModal}></AddUser>

      </Box>
    </Container>
  );
};

export default UsersManagement;
