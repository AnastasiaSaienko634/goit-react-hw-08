import { createSelector } from "@reduxjs/toolkit";

export const isLogged = (state) => state.auth.isLoggedIn;

export const username = (state) => state.auth.user.name;

export const error = (state) => state.auth.error;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;
