import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Userlogininformation: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { Userlogininformation } = userslice.actions;

export default userslice.reducer;
