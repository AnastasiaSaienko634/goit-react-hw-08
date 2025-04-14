import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    // дозволяє обробляти асинхронні дії або зовнішні
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload; // кидаємо в items інформацію, щоб зберегти
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload); // додаємо новий контакт
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload
        ); // видаляємо
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactsSlice.reducer;

// reducers: {
//   fetchInProgress(state) {
//     state.isLoading = true;
//   },
//   fetchSuccess(state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.items = action.payload;
//   },
//   fetchError(state, action) {
//     state.isLoading = false;
//     state.error = action.payload;
//   },
//   addContact: (state, action) => {
//     state.items.push(action.payload); //просто пушимо в масив
//   },
//   deleteContact: (state, action) => {
//     state.items = state.items.filter(
//       (contact) => contact.id !== action.payload //якщо ід співпадає то він видаляється з списку
//     );
//   },
// },
