import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};
export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    formData: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { formData } = userSlice.actions;
export default userSlice.reducer;
