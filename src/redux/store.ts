import { configureStore } from "@reduxjs/toolkit";
import celebrationReducer from "./feature/celebrationSlice";

export const store = configureStore({
  reducer: {
    celebration: celebrationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
