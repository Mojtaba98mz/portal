import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: {} }

const searchUserSlice = new createSlice({
  name: "searchUser",
  initialState,
  reducers: {
    saveUserData: (state, action) => {
      state.data = action.payload
    },
    clearUserSearch: (state) => {
      console.log("ttttttt")

      state.data={}
    }
  }
})

export default searchUserSlice
export const { saveUserData,clearUserSearch } = searchUserSlice.actions
