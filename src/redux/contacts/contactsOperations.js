import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getData,
  postData,
  patchData,
  deleteData,
} from 'services/contactsApiEndpoints';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',

  async (_, thunkApi) => {
    try {
      const data = await getData();

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',

  async (newPerson, thunkApi) => {
    try {
      const data = await postData(newPerson);

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',

  async (updatedPerson, thunkApi) => {
    try {
      const data = await patchData(updatedPerson);

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',

  async (person, thunkApi) => {
    try {
      const data = await deleteData(person);

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
