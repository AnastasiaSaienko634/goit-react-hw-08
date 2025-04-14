import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://67f584dd913986b16fa4db34.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll", //пишемо назву екшена це fetchAll
  async (_, thunkAPI) => {
    //асинхронна операція
    try {
      const response = await axios.get("contacts"); //забираємо данні з сервера методом get
      return response.data; //асинхронний запрос, data це результат від серверу
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (information, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", information);
      return response.data; //сервер повертає контакти вже з id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId; //не пишемо response.data бо сервер вже не повертає данні
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
