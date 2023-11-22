import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registration,
  login,
  logout,
  getCurrentUser,
} from 'services/authApiEndpoints';

export const authRegistration = createAsyncThunk(
  'auth/registration',
  async (body, thunkApi) => {
    console.log('authRegistration =>');

    try {
      const data = await registration(body);
      // console.log('registration response:', data); // develop

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      console.log(`registration Error: "${error.message}"`);

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
      console.log('login response:', data); // develop

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      console.log(`login Error: "${error.message}"`);

      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (body, thunkApi) => {
    console.log('authLogout =>');

    try {
      const data = await logout(body);
      console.log(`logout response:`, data);

      if (!data) {
        throw new Error('Server Error!');
      }
      console.log('data:', data);
      return data;
    } catch (error) {
      console.log(`logout Error: "${error.message}"`);

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
      console.log('token:', token);

      if (!token) {
        return thunkApi.rejectWithValue('Unable to fetch user');
      }

      const data = await getCurrentUser();
      console.log('getCurrentUser response:', data); // develop

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      console.log(`getCurrentUser Error: "${error.message}"`);

      return thunkApi.rejectWithValue(error.message);
    }
  }
);
