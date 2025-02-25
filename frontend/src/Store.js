import { configureStore } from "@reduxjs/toolkit";
import userloginslice from "./Slices/UserSilce";
import Otpverifyslice from "./Slices/OtpverifySlice";

export const store = configureStore({
  reducer: {
    userinfo: userloginslice,
    otpinfo: Otpverifyslice,
  },
});
