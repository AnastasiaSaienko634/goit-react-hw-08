import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contacts/slice";
import filterReducer from "./filters/slice";
import authReducer from "./auth/slice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReducer,
    auth: authReducer,
  },
});
