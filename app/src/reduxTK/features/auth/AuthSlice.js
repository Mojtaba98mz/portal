import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  token: "",
  role: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("userData", JSON.stringify(action.payload));
      const {username, token, role } = action.payload
      state.role = role
      state.username = username
      state.token = token

    },
    logOut: (state) => {
      localStorage.removeItem("userData")
      state.role = ""
      state.token = ""
      state.username = ""

    }
  }
});
export default authSlice
export const { login, logOut } = authSlice.actions

