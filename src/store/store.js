import { configureStore } from "@reduxjs/toolkit";
import { uiSlice, calendarSlice } from "./";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    auth: authSlice.reducer,
    calendar: calendarSlice.reducer,
    ui: uiSlice.reducer,
  },
});
