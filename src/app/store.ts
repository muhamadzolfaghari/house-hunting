import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "../features/propertySlice";
import userSlice from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    property: propertySlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
