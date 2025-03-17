import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("INCREMENT");
      state.value += 1;
    },
    decrement: (state) => {
      console.log("DECREMENT");
      state.value -= 1;
    },
    reset: (state) => {
      console.log("RESET");
      state.value = 0;
    },
  },
});
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
