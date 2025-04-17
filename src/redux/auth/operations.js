import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setAuthHeader = (value) => {
  axios.defaults.headers.common.Authorization = value;
};

export const register = createAsyncThunk(
  "auth/register",
  async (userInformation, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", userInformation);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userInformation, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", userInformation);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    setAuthHeader("");
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    const persistedToken = reduxState.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue("No Token found");
    }

    try {
      setAuthHeader(`Bearer ${reduxState.auth.token}`);
      const response = await axios.get("/users/current");
      return response.data; // обьект юзера
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
