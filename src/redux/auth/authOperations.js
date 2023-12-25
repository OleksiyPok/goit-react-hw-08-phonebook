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
    try {
      const data = await registration(body);
      const { token } = data;
      setToken(token);

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
      const { token } = data;
      setToken(token);

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

      deleteToken();

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkApi) => {
    try {
      const persistedToken = thunkApi.getState().auth.token;
      setToken(persistedToken);

      if (persistedToken === null) {
        return thunkApi.rejectWithValue('Unable to fetch user');
      }

      const data = await getCurrentUser();

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
