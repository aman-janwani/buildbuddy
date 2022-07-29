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
    updateData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    removeData: (state, action) => {
      state.data = {};
    },
  },
});

export const { addData, removeData, updateData } = dataSlice.actions;

export default dataSlice.reducer;