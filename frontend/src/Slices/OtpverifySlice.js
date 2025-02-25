
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null
};

export const Otpverifyslice = createSlice({
  name: "otpdata",
  initialState,
  reducers: {
    otpdatainfo: (state, action) => {
      state.value = action.payload;
    },
  },
});


export const { otpdatainfo } = Otpverifyslice.actions;

export default Otpverifyslice.reducer;
