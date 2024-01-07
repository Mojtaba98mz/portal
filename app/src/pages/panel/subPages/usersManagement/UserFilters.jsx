import { SearchSharp } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearUserSearch, saveUserData } from '../../../../reduxTK/features/searchUser/searchUserSlice'
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
const UserFilters = () => {

  const [nationalCode, setNationalCode] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  // const [filteredUser, setFilteredUser] = useState({})
  const dispatch = useDispatch()
  let url = '/admin/users'
  const params = new URLSearchParams({
    "username.contains": nationalCode,
    "firstName.contains": firstName,
    "lastName.contains": lastName,
  })

  url += '?' + params.toString();
  console.log(url)
  const searchNationalCode = () => {
    if (nationalCode.length > 0 || firstName.length > 0 || lastName.length > 0) {
      axios.get(url)
        .then(res => { dispatch(saveUserData(res.data)) })
        .catch(error => console.log(error))
    }
  }

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
  });

  return (
    <>
      <Accordion variant='elevation' sx={{ width: "100%", direction: "rtl", marginY: "15px" }}>
        <AccordionSummary><Typography variant='body1' fontFamily="Yekan">جستجوی کاربر</Typography></AccordionSummary>
        <AccordionDetails>
          <Box sx={{ marginLeft: "auto", marginY: "5px", display: "flex", justifyContent: "space-between" }}>
            <CacheProvider value={cacheRtl}>
              <TextField variant="outlined" size="small" label="نام" InputLabelProps={{ shrink: true }} sx={{ direction: "ltr", maxWidth: "220px", textAlign: "right" }} onChange={(e) => setFirstName(e.target.value)} ></TextField>
              <TextField variant="outlined" size="small" label="نام خانوادگی" InputLabelProps={{ shrink: true }} sx={{ direction: "ltr", maxWidth: "220px" }} onChange={(e) => setLastName(e.target.value)} ></TextField>
              <TextField variant="outlined" size="small" label="کدملی" InputLabelProps={{ shrink: true }} sx={{ direction: "ltr", maxWidth: "220px" }} onChange={(e) => setNationalCode(e.target.value)} ></TextField>
            </CacheProvider>
            <Box>
              <IconButton onClick={searchNationalCode}><SearchSharp /></IconButton>
              <IconButton onClick={() => dispatch(clearUserSearch())}><FilterAltOffIcon sx={{ width: "17px" }} /></IconButton>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

    </>
  )
}

export default UserFilters
