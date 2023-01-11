import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counterSlice";

const store = configureStore({
  reducer: {
    [counter.name]: counter.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
