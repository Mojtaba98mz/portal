import React from 'react'
import CustomizedTables from '../../../../components/table/muiTable'
import DataGridTable from '../../../../components/table/DataGrid'
import { Box, Typography } from '@mui/material'

const UsersManagement = () => {
  return (
    <Box  sx={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
      <Typography variant='h5' marginY="30px">مدیریت کاربران</Typography>
      <DataGridTable></DataGridTable>
    </Box>
  )
}

export default UsersManagement
