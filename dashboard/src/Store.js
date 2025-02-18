import { configureStore } from "@reduxjs/toolkit";
import  userslice  from "./Slices/userSlice";

export const store = configureStore({
  reducer: {
    userinfo: userslice,
  },
});
