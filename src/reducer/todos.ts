import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  task: string;
};

type InitialState = {
  todos: Todo[];
};

const initialState: InitialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [...state.todos, action.payload];
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map((t) =>
        t.id === action.payload.id
          ? {
              id: t.id,
              task: action.payload.task,
            }
          : t
      );
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
