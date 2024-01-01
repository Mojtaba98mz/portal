import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import React from 'react'

const TableCustomize = ({tableRow,tableHead,widthTable}) => {
  return (
    <Box width="100%" display="flex" justifyContent="center" marginY="60px">
      <TableContainer component={Paper} sx={{ width: widthTable }} >
        <Table>
          <TableHead sx={{ background: blueGrey[500] }} >
            <TableRow >
              {tableHead.map((item) => 
              <TableCell align="center" sx={{ color: "white" }}>{item}</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {tableRow.map((item) => 
                <TableCell align='center' sx={{ width: "200px", wordBreak: "break-word" }}>{item}</TableCell>
              )}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
      )
}
export default TableCustomize
