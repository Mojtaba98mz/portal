import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./features/auth/AuthSlice";
import SearchUserSlice from "./features/searchUser/searchUserSlice";

export const store = configureStore({
  reducer: { auth: AuthSlice.reducer, searchUser: SearchUserSlice.reducer },
});
