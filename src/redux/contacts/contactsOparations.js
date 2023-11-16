import { createAsyncThunk } from '@reduxjs/toolkit';

// import { getData, postData, deleteData } from 'services/authApiService';
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
      // console.log('get data:', data); // develop

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
      // console.log('post data:', data); // develop

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
      // console.log('patch data:', data); // develop

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
      // console.log('delete data:', data); // develop

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
