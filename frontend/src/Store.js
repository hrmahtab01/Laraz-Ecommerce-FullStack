import { configureStore } from "@reduxjs/toolkit";
import userloginslice from "./Slices/UserSilce";
import Otpverifyslice from "./Slices/OtpverifySlice";
import CategorySilce from "./Slices/CategorySilce";

export const store = configureStore({
  reducer: {
    userinfo: userloginslice,
    otpinfo: Otpverifyslice,
    categoryinfo: CategorySilce,
  },
});
