import { configureStore } from "@reduxjs/toolkit";
import userloginslice from "./Slices/UserSilce";

export const store = configureStore({
  reducer: {
    userinfo: userloginslice,
  },
});
