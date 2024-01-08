import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({
  name: "",
  initialState: {
    counter: 0,
  },
  reducers: {
    incrementCounter: (state) => {
      state.counter += 1;
    },
  },
});

export const { incrementCounter } = counterSlice.actions;

export default counterSlice.reducer;
