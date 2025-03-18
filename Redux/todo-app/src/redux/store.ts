import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export interface RootState {
  todos: {
    items: Todo[];
  };
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;