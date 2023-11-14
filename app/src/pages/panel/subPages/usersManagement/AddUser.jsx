import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { grey } from "@mui/material/colors";
import axios from "axios";
import toast from "react-hot-toast";

const AddUser = ({ showModal, setShowModal }) => {
  const [nationalCode, setNationalCode] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [addedUser, setAddedUser] = useState("");
  const [errors, setErrors] = useState("")
  // {
  //   username: "123456",
  //   firstName: "moshtaba",
  //   lastName: "zamandi",
  //   activated: true,
  //   password: "123456"
  // }

  const postUserData = {
    username: nationalCode,
    firstName: firstName,
    lastName: lastName,
    activated: true,
    password: password,
  };

  const closeModalHandler = () => {
    setShowModal(false);
    setAddedUser("")
    setErrors("")
  };
  const addUserHandler = () => {
    axios
      .post("/admin/users", postUserData)
      .then((res) => setAddedUser(res))
      .catch((error) => setErrors(error));
    // console.log("added user", addedUser);
    // console.log("data send:", postUserData)
  };
  useEffect(() => {

    notif()

  }, [addedUser, errors])

  const notif = () => {
    if (addedUser?.data?.username) {
      toast.success(`کاربر ${addedUser.data.username}با موفقست ساخته شد`);
    }
    else if (errors?.response?.data?.detail == "login-already-used") {
      toast.error("یوزر مورد نظر قبلا ساخته شده است");
    }
    else if (errors?.response?.data == "invalid-national-code") {
      toast.error("کدملی وارد شده صحیح نمی باشد")
    }
    else {
      console.log(errors)
    }

  }



  return (
    <Modal
      onClose={closeModalHandler}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
      open={showModal}
      sx={{ display: "grid", placeItems: "center" }}
    >
      <Box
        sx={{
          border: `1px solid ${grey[300]}`,
          background: "white",
          // boxShadow:"4px 4px 14px gray",
          width: "30%",
          margin: "auto",
          height: "500px",
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
          onChange={(e) => {
            setNationalCode(e.target.value);
          }}
        ></TextField>
        <TextField
          variant="outlined"
          size="small"
          label="نام"
          sx={{ width: "70%", mt: 4 }}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></TextField>
        <TextField
          variant="outlined"
          size="small"
          label="نام خانوادگی"
          sx={{ width: "70%", mt: 4 }}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></TextField>

        <Box sx={{ width: "70%", margin: "auto", position: "relative" }}>
          <TextField
            type={showPassword ? "text" : "password"}
            variant="outlined"
            size="small"
            label="رمزعبور"
            sx={{ width: "100%", mt: 2, position: "relative" }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></TextField>
          <IconButton
            sx={{ position: "absolute", top: "40%", ml: 2, cursor: "pointer" }}
            onClick={() => setShowPassword(!showPassword)}
          >
            <VisibilityIcon />
          </IconButton>
        </Box>
        <Button
          variant="contained"
          color="success"
          sx={{ mt: 3 }}
          onClick={() => addUserHandler()}
        >
          <Typography>افزودن</Typography>
        </Button>
      </Box>
    </Modal>
  );
};

export default AddUser;
