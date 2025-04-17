import { createSlice } from "@reduxjs/toolkit";

import { register, login, logout, refreshUser } from "./operations";

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
    error: false,
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
        state.error = true;
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
        state.error = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.token = null;
        state.user = {
          name: null,
          email: null,
        };
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export default authSlice.reducer;
