import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registration,
  login,
  logout,
  getCurrent,
} from 'services/authApiEndpoints';

export const authRegistration = createAsyncThunk(
  'auth/registration',
  async (body, thunkApi) => {
    try {
      const data = await registration(body);
      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authCurrent = createAsyncThunk(
  'auth/current',
  async (body, thunkApi) => {
    try {
      const data = await getCurrent(body);
      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authLogin = createAsyncThunk(
  'auth/login',
  async (body, thunkApi) => {
    try {
      const data = await login(body);
      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (body, thunkApi) => {
    try {
      const data = await logout(body);

      if (!data) {
        throw new Error('Server Error!');
      }
      console.log('data:', data);
      return data;
    } catch (error) {
      console.log('logoutError');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
