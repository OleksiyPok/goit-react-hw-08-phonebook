import { createSlice } from '@reduxjs/toolkit';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
} from './authSliceHendlers';
import { authInitialState } from './authInitialState';

import { authLogin } from './authThunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(authLogin.fulfilled, handleFulfilled)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
