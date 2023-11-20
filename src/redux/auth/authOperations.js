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
    try {
      const data = await registration(body);
      // console.log('registration response:', data);

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      // console.log('registration Error');

      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async (body, thunkApi) => {
    try {
      const data = await login(body);
      // console.log('login response:', data);

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      // console.log('login Error');

      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (body, thunkApi) => {
    try {
      const data = await logout(body);
      // console.log('logout response:', data);

      if (!data) {
        throw new Error('Server Error!');
      }
      console.log('data:', data);
      return data;
    } catch (error) {
      // console.log('logout Error');

      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authCurrentUser = createAsyncThunk(
  'auth/current',
  async (body, thunkApi) => {
    try {
      const data = await getCurrentUser(body);
      // console.log('getCurrentUser response:', data);

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      // console.log('getCurrentUser Error');

      return thunkApi.rejectWithValue(error.message);
    }
  }
);
