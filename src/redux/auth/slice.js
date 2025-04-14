import { createSlice } from "@reduxjs/toolkit";

import { register, login, logout } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(register.rejected, (state, action) => {
        state.token = null;
        state.user = null;
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.token = null;
        state.user = null;
        state.isLoggedIn = false;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.token = null;
        state.user = null;
        state.isLoggedIn = false;
      });
  },
});

// export const [] = authSlice.actions;
export default authSlice.reducer;
