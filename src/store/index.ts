import { configureStore } from "@reduxjs/toolkit";

import authReducer from "src/reducer/auth";
import todosReducer from "src/reducer/todos";

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
