import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")):null
};

export const userloginslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userlogininfo: (state, action) => {
      state.value = action.payload;
    },
  },
});


export const { userlogininfo } = userloginslice.actions;

export default userloginslice.reducer;
