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
      // console.log('getContact response:', data); // develop

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      // console.log('getContact Error');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',

  async (newPerson, thunkApi) => {
    try {
      const data = await postData(newPerson);
      // console.log('addContact response:', data); // develop

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      // console.log('addContact Error');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',

  async (updatedPerson, thunkApi) => {
    try {
      const data = await patchData(updatedPerson);
      // console.log('updateContact response:', data); // develop

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      // console.log('updateContact Error');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',

  async (person, thunkApi) => {
    try {
      const data = await deleteData(person);
      // console.log('deleteContact response:', data); // develop

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      // console.log('deleteContact Error:', data); // develop
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
