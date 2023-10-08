import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from 'services/authApiService';

export const loginThunk = createAsyncThunk('auth/login', async user => {
  return await login(user);
});
