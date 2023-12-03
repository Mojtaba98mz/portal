import * as React from "react";
import styles from "./DataGrid.module.css";
import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import SaveIcon from "@mui/icons-material/Save";
import { blueGrey, lightGreen } from "@mui/material/colors";
import { useState } from "react";
import axios from "axios";
import { toastMessage } from "../../utils/functions";
import { useSelector } from "react-redux";
import EncryptText from "../encyptText/EncryptText";
export default function DataGridTable() {
  const [open, setOpen] = useState(false);
  const [usersData, setUsersData] = useState();
  const [changePassword, setChangePassword] = useState();
  const [rowData, setRowData] = useState({});
  const filteredUser =
    useSelector((state) => state.searchUser.data?.content) ?? [];
  // const filteredUser2 = [];
  // console.log("inside daa gird", filteredUser2);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });
  const encryptedPass = EncryptText(changePassword)
  console.log(encryptedPass)
  //encrypted passsword 
  // const [publickey, setPublickey] = useState("");
  // const getPublickey = () => {
  //   axios
  //     .get("/publicKey")
  //     .then((res) => setPublickey(res.data))
  //     .catch((error) => console.log(error));
  // };
  // const encypt = new JSEncrypt
  // encypt.setPublicKey(publickey)
  // const encryptedPass = encypt.encrypt(changePassword)
  // // setEncryptedPassword(encryptedPass)
  // console.log(publickey)
  // // console.log(usersData);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (row) => {
    setOpen(true);
    setRowData(row);
    console.log("in open handler", rowData);
  };
  console.log(changePassword)
  const changePasswordHandler = () => {
    // setRowData({ ...rowData, password:"amir"});
    const sendData = { ...rowData,password: encryptedPass }
    console.log(sendData)
    axios
      .put("/admin/users", sendData)
      .then((res) =>
        res.status == 200
          ? toastMessage("تغییر پسورد با موفقیت انجام شد", "success")
          : toastMessage("تغییر پسورد انجام نش", "error"),
      )
      .catch((error) => console.log(error));
  };
  const saveUserStatus = (row) => {
    axios
      .put("/admin/users", row)
      .then((res) => {
        res.status == 200
          ? toastMessage("تغییرات با موفقیت ذخیره شد", "success")
          : toastMessage("تغییرات ذخیره نشد", "error");
      })
      .catch((error) => console.log(error));
  };
  const getUserData = () => {
    // console.log("inside", paginationModel.pageSize)
    axios
      .get(
        `/admin/users?page=${paginationModel.page}&size=${paginationModel.pageSize}`,
      )
      .then((res) => {
        setUsersData(res.data);
      })
      .catch((error) => console.log(error));
  };

  let rows = [];
  // usersData ? rows = usersData.content : []
  // console.log("filtered:", filteredUser);
  // console.log("inside datagrid filterd",filteredUser.content)
  if (filteredUser.length > 0) {
    rows = filteredUser;
  } else if (!filteredUser.length > 0 && usersData) {
    rows = usersData.content;
  } else {
    rows = [];
  }
  React.useEffect(() => {
    getUserData();
  }, [paginationModel.pageSize, paginationModel.page]);

  // const saveHandler = () => {
  //   axios
  //     .put("/admin/users")
  //     .then((res) => { res.status == 200 ? toastMessage("تغییرات با موفقیت ذخیره شد", "success") : toastMessage("تغییرات ذخیره نشد", "error") })
  //     .catch((error) => console.log(error));
  // };
  // {
  // createdBy: "system",
  // createdDate: null,
  // firstName: "Administrator"
  // id: 1
  // lastModifiedBy: "system"
  // lastModifiedDate: null
  // lastName: "Administrator"
  // username: "admin"
  //   }
  //
  const columns = [
    {
      field: "id",
      headerName: "شناسه",
      align: "center",
      headerAlign: "center",
      resizeable: true,
      Width: 80,
      headerClassName: "themeHeader",
    },
    {
      field: "firstName",
      resizeable: true,
      headerName: "نام",
      headerAlign: "center",
      width: 100,
      headerClassName: "themeHeader",
    },
    {
      field: "lastName",
      headerName: "نام خانوادگی",
      width: 130,
      headerClassName: "themeHeader",
    },
    {
      field: "activated",
      headerName: "وضعیت",
      type: "boolean",
      editable: true,
      width: 90,
      headerClassName: "themeHeader",
    },
    {
      field: "username",
      headerName: "نام کاربری",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 132,
      headerClassName: "themeHeader",
      // valueGetter: (params) =>
      //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "lastModifiedDate",
      headerName: "تاریخ ویرایش",
      description: "This column has a value getter and is not sortable.",
      headerAlign: "center",
      type: "Date",
      sortable: true,
      width: 200,
      headerClassName: "themeHeader",
      // valueGetter: (params) =>
      //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "action",
      headerName: "بیشتر",
      headerAlign: "center",
      sortable: false,
      width: 140,
      headerClassName: "themeHeader",
      renderCell: ({ row }) => (
        <div>
          <IconButton onClick={() => console.log(row)}>
            <DeleteForeverIcon color="error" />
          </IconButton>

          <IconButton onClick={() => saveUserStatus(row)}>
            <SaveIcon color="info" />
          </IconButton>
          <IconButton onClick={() => handleOpen(row)}>
            <EditIcon color="success" />
          </IconButton>
        </div>
      ),
    },
  ];

  const columnsReverse = columns.reverse();

  const [rowCountState, setRowCountState] = React.useState(
    usersData?.totalElements || 0,
  );

  React.useEffect(() => {
    setRowCountState((prevRowCountState) =>
      usersData?.totalElements !== undefined
        ? usersData?.totalElements
        : prevRowCountState,
    );
  }, [usersData?.totalElements, setRowCountState]);
  const localization = {
    filterOperatorEquals: "مساوی",
    filterOperatorContains: "شامل",
    filterOperatorIsEmpty: "خالی باشد",
    filterOperatorIsNotEmpty: "خالی نباشد",
    filterOperatorStartsWith: "شروع شود با",
    filterOperatorEndsWith: "پایان یابد با",
    filterOperatorIs: "باشد",
    columnMenuSortAsc: "سورت",
    columnMenuFilter: "فیلتر",
    columnMenuSortDesc: "سورت",
    columnMenuHideColumn: "مخفی کردن ستون ها",
    columnMenuManageColumns: "مدیریت ستون ها",
    columnMenuUnsort: "خارج نمودن از سورت",
  };

  return (
    <>
      <Modal
        onClose={handleClose}
        open={open}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
      >
        <div className={styles.modalContainer}>
          <div className={styles.modalCard}>
            <Box>
              <HighlightOffIcon
                sx={{ cursor: "pointer" }}
                onClick={handleClose}
                className={styles.cancelButton}
              />
            </Box>
            <h3 style={{ fontFamily: "Yekan" }}> تغییر رمزعبور</h3>
            <div className={styles.content}>
              <TextField
                variant="standard"
                label="رمزعبور جدید"
                onChange={(e) => setChangePassword(e.target.value)}
              ></TextField>
              <Button
                variant="contained"
                size="large"
                color="success"
                onClick={() => {
                  changePasswordHandler();
                }}
                sx={{
                  marginTop: "50px",
                  width: "100%",
                  background: lightGreen[400],
                }}
              >
                <Typography variant="body1"> ذخیره</Typography>
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <Box
        sx={{
          width: "100%",
          height: 400,
          "& .themeHeader": {
            backgroundColor: blueGrey[500],
            color: "whitesmoke",
          },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columnsReverse}
          pageSizeOptions={[5, 10, 20, 50, 100]}
          // checkboxSelection
          rowCount={rowCountState}
          paginationModel={paginationModel}
          paginationMode="server"
          onPaginationModelChange={setPaginationModel}
          sx={{ fontFamily: "Yekan" }}
          localeText={localization}
        />
      </Box>
    </>
  );
}
