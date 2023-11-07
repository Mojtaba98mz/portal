import * as React from "react";
import styles from "./DataGrid.module.css"
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Box, Button, Divider, IconButton, Modal, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SecurityIcon from "@mui/icons-material/Security";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { blueGrey,lightGreen } from '@mui/material/colors';
import { useState } from "react";

export default function DataGridTable() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = (row) => {
    setOpen(true);
    console.log(row)
  };
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
      headerName: "First name",
      width: 130,
      headerClassName: "themeHeader",
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 130,
      headerClassName: "themeHeader",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
      headerClassName: "themeHeader",
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      headerClassName: "themeHeader",
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      sortable: false,
      width: 120,
      headerClassName: "themeHeader",
      renderCell: ({ row }) => (
        <div>
          <IconButton onClick={() => console.log(row)}>
            <DeleteForeverIcon />
          </IconButton>
          <IconButton onClick={() => handleOpen(row)}>
            <EditIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className={styles.modalContainer}
        >
          <div className={styles.modalCard}>
            <Box>
            <HighlightOffIcon sx={{cursor:"pointer"}} onClick={handleClose} className={styles.cancelButton}/>
              <Divider variant="middle"></Divider>
            </Box>
            <div className={styles.content}>
              <TextField variant="standard" label="password"></TextField>
              <Button variant="contained" size="large" color="success" sx={{marginTop:"50px",width:"100%",background:lightGreen[400]}}><Typography variant="body1"> ذخیره</Typography></Button>
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
