// src/redux/todoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the todo type (already in store.ts, but repeated here for clarity)
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Define the state type
interface TodoState {
  items: Todo[];
}

// Load todos from localStorage or use an empty array
const loadTodosFromLocalStorage = (): Todo[] => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : [];
};

// Initial state with loaded todos
const initialState: TodoState = {
  items: loadTodosFromLocalStorage(),
};

// Create the slice
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.items.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;