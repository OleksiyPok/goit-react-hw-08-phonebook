import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registration,
  login,
  logout,
  getCurrentUser,
} from 'services/authApiEndpoints';

import { setToken, deleteToken } from 'services/apiConfig';

export const authRegistration = createAsyncThunk(
  'auth/registration',
  async (body, thunkApi) => {
    console.log('authRegistration =>');

    try {
      const data = await registration(body);
      console.log('authRegistration response:', data); // develop

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      console.log(`authRegistration Error: "${error.message}"`);

      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async (body, thunkApi) => {
    console.log('authLogin =>');

    try {
      const data = await login(body);
      console.log('authLogin response:', data); // develop

      const { token } = data;
      setToken(token);

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      console.log(`authLogin Error: "${error.message}"`);

      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (body, thunkApi) => {
    console.log('authLogout =>');

    try {
      const token = thunkApi.getState().auth.token;
      setToken(token);

      const data = await logout(body);
      console.log(`authLogout response:`, data);

      if (!data) {
        throw new Error('Server Error!');
      }

      deleteToken();

      return data;
    } catch (error) {
      console.log(`authLogout Error: "${error.message}"`);

      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkApi) => {
    console.log('authCurrentUser =>');

    try {
      const token = thunkApi.getState().auth.token;
      setToken(token);

      const data = await getCurrentUser();
      console.log('authCurrentUser response:', data); // develop

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      console.log(`authCurrentUser Error: "${error.message}"`);

      return thunkApi.rejectWithValue(error.message);
    }
  }
);
