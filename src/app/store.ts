import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
