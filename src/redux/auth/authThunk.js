import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, getProfile } from 'services/authApiService';

export const authLogin = createAsyncThunk(
  'auth/login',
  async (body, thunkApi) => {
    // try {
    const data = await login(body);
    // if (!data) {
    //   throw new Error('Server Error!');
    // }

    return data;
    // } catch (error) {
    // return thunkApi.rejectWithValue(error.message);
    // }
  }
);

export const authLogout = createAsyncThunk(
  'auth/logout',
  async (body, thunkApi) => {
    // try {
    const data = await logout(body);
    // if (!data) {
    // throw new Error('Server Error!');
    // }

    return data;
    // } catch (error) {
    // return thunkApi.rejectWithValue(error.message);
    // }
  }
);

export const authCurrent = createAsyncThunk(
  'auth/current',
  async (body, thunkApi) => {
    // try {
    const data = await getProfile(body);
    // if (!data) {
    // throw new Error('Server Error!');
    // }

    return data;
    // } catch (error) {
    // return thunkApi.rejectWithValue(error.message);
    // }
  }
);
