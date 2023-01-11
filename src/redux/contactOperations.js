import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  fetchContactsApi,
  removeContactApi,
} from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchContactsApi();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWithValue }) => {
    try {
      const contacts = await addContactApi(contact);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contact/remove',
  async (id, { rejectWithValue }) => {
    try {
      await removeContactApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
