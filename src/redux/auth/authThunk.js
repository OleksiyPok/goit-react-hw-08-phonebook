import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from 'services/authApiService';

export const authLogin = createAsyncThunk(
  'auth/login',

  async (user, thunkApi) => {
    try {
      const data = await login(user);
      // console.log("data:", data);

      if (!data) {
        throw new Error('Server Error!');
      }

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
