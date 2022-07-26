import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {}
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = { ...action.payload };
    },
    removeData: (state, action) => {
      state.data = {};
    },
  },
});

export const { addData, removeData } = dataSlice.actions;

export default dataSlice.reducer;