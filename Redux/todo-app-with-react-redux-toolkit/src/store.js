import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todos/todoSlice.js";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
