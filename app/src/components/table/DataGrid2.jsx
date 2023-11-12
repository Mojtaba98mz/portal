import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { createFakeServer } from '@mui/x-data-grid-generator';

const SERVER_OPTIONS = {
  useCursorPagination: false,
};

const { useQuery, ...data } = createFakeServer({}, SERVER_OPTIONS);

export default function ServerPaginationGrid() {
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });
  console.log(paginationModel)

  const { isLoading, rows, pageInfo } = useQuery(paginationModel);

  // Some API clients return undefined while loading
  // Following lines are here to prevent `rowCountState` from being undefined during the loading
  const [rowCountState, setRowCountState] = React.useState(
    pageInfo?.totalRowCount || 0,
  );
  React.useEffect(() => {
    setRowCountState((prevRowCountState) =>
      pageInfo?.totalRowCount !== undefined
        ? pageInfo?.totalRowCount
        : prevRowCountState,
    );
  }, [pageInfo?.totalRowCount, setRowCountState]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rowCount={rowCountState}
        pageSizeOptions={[5]}
        paginationModel={paginationModel}
        paginationMode="server"
        onPaginationModelChange={setPaginationModel}
      />
    </div>
  );
}

















import * as React from "react";
import styles from "./DataGrid.module.css";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Button,
  Divider,
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
export default function DataGridTable() {
  const [open, setOpen] = useState(false);
  const [usersData, setUsersData] = useState()
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (row) => {
    setOpen(true);
    console.log(row);
  };

  const getUserData = () => {
    axios.get("/admin/users")
      .then(res => setUsersData(res.data.content))
      .catch(error => console.log(error))
  }

  let rows = []
  usersData ? rows = usersData : []
  console.log(usersData)
  React.useEffect(() => {
    getUserData()

  }, [])

  const saveHandler = () => {
    axios.put("/admin/users",)
      .then(res => console.log("res Put", res))
      .catch((error) => console.log(error))

  }
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
      headerName: "ID",
      align: "center",
      headerAlign: "center",
      width: 70,
      headerClassName: "themeHeader",
    },
    {
      field: "firstName",
      headerName: "نام",
      width: 110,
      headerClassName: "themeHeader",
    },
    {
      field: "lastName",
      headerName: "نام خانوادگی",
      width: 120,
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
      width: 100,
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
      width: 170,
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
            <DeleteForeverIcon />
          </IconButton>

          <IconButton onClick={() => console.log(row)}>
            <SaveIcon />
          </IconButton>
          <IconButton onClick={() => handleOpen(row)}>
            <EditIcon />
          </IconButton>
        </div>
      ),
    },
  ];

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
              <TextField variant="standard" label="رمزعبور جدید"></TextField>
              <Button
                variant="contained"
                size="large"
                color="success"
                onClick={() => { saveHandler() }}
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
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          // checkboxSelection

        />
      </Box>
    </>
  );
}


