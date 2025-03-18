import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
    items: {
        id: number;
        text: string;
        completed: boolean;
    }[];
}
const initialState: TodoState = {
    items: [],
};
const todoSlice = createSlice({
    name: 'todo',
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
    }
})

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;