import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import contactReducer from "./contacts/slice";
import filterReducer from "./filters/slice";
import authReducer from "./auth/slice";

// Persist only the auth slice
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"], // only persist the token
};

// Wrap only the authReducer with persistReducer
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // needed for redux-persist
    }),
});

export const persistor = persistStore(store);
