// src/features/todoSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  title: string;
  description: string;
};

type TodoState = {
  todos: Todo[];
};

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (
      state: TodoState,
      action: PayloadAction<{ title: string; description: string }>
    ) => {
      const newTodo: Todo = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state: TodoState, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;