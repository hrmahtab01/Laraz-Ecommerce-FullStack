import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const CategorySilce = createSlice({
  name: "category",
  initialState,
  reducers: {
    categoryinfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { categoryinfo } = CategorySilce.actions;

export default CategorySilce.reducer;
