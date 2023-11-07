import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer, {
  tableContainerClasses,
} from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TableFooter, TablePagination } from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "gray",
    color: theme.palette.common.white,
    borderReduce: 15,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
// const useStyel=makeStyles((theme)=>({
//   tableContainer:{
//     borderRedius:15,
//     maxWidth:100
//   }
// }))

function createData(id, fullName, sna, role, userName) {
  return { id, fullName, sna, role, userName };
}

const rows = [
  createData(1, "amir meghrazi", 13292887, "admin", "a.meghrazi"),
  createData(2, "amir meghrazi2", 13292887, "user", "a.meghrazi"),
  createData(3, "amir meghrazi3", 13292887, "user", "a.meghrazi"),
  createData(4, "amir meghrazi4", 13292887, "user", "a.meghrazi"),
  createData(4, "amir meghrazi4", 13292887, "user", "a.meghrazi"),
  createData(4, "amir meghrazi4", 13292887, "user", "a.meghrazi"),
  createData(4, "amir meghrazi4", 13292887, "user", "a.meghrazi"),
  createData(4, "amir meghrazi4", 13292887, "user", "a.meghrazi"),
  createData(4, "amir meghrazi4", 13292887, "user", "a.meghrazi"),
  createData(4, "amir meghrazi4", 13292887, "user", "a.meghrazi"),
  createData(4, "amir meghrazi4", 13292887, "user", "a.meghrazi"),
  createData(4, "amir meghrazi4", 13292887, "user", "a.meghrazi"),
  createData(4, "amir meghrazi4", 13292887, "user", "a.meghrazi"),
  createData(4, "amir meghrazi4", 13292887, "user", "a.meghrazi"),
  createData(4, "amir meghrazi4", 13292887, "user", "a.meghrazi"),
  createData(4, "amir meghrazi4", 13292887, "user", "a.meghrazi"),
  createData(4, "amir meghrazi4", 13292887, "user", "a.meghrazi"),
  createData(4, "amir meghrazi4", 13292887, "user", "a.meghrazi"),
];

export default function CustomizedTables() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div style={{ border: "1px solid black", width: "100%",marginTop:"50px",marginBottom:"50px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>id</StyledTableCell>
              <StyledTableCell align="right">fullName</StyledTableCell>
              <StyledTableCell align="right">SNA</StyledTableCell>
              <StyledTableCell align="right">Role</StyledTableCell>
              <StyledTableCell align="right">userName</StyledTableCell>
              <StyledTableCell align="center">action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.fullName}</StyledTableCell>
                <StyledTableCell align="right">{row.sna}</StyledTableCell>
                <StyledTableCell align="right">{row.role}</StyledTableCell>
                <StyledTableCell align="right">{row.userName}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="contained" color="error">
                    remover
                  </Button>{" "}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}
