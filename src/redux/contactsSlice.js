import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, removeContact } from './contactOperations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = [...state.items, payload];
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [removeContact.pending]: state => {
      state.isLoading = true;
    },
    [removeContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    [removeContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
export const contactsReducer = contactsSlice.reducer;
// export default contactsSlice.reducer;

//Було////////////////////////////////////
// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const initialState = {
//   items: [],
//   filter: '',
// };

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact: (state, { payload }) => {
//       state.items.push(payload);
//     },
//     removeContact: (state, { payload }) => {
//       state.items = state.items.filter(({ id }) => id !== payload.id);
//     },
//     setFilter: (state, { payload }) => {
//       state.filter = payload;
//     },
//   },
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const persistedReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const { addContact, removeContact, setFilter } = contactsSlice.actions;

// export default contactsSlice.reducer;

// export const getContacts = state => state.items;
// export const getFilter = state => state.filter;
