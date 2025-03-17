
import { configureStore } from '@reduxjs/toolkit';
import habbitsReducer from "./habbitSlice";

const store = configureStore({
  reducer: {
    habbits: habbitsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;