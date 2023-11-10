import { createSlice } from '@reduxjs/toolkit';
import {
  handleFulfilledLogin,
  handleFulfilledLogout,
  handleFulfilledProfile,
  handlePending,
  handleRejected,
} from './authSliceHendlers';
import { authInitialState } from './authInitialState';

import { authLogin, authLogout, authCurrent } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(authLogin.fulfilled, handleFulfilledLogin)
      .addCase(authLogout.fulfilled, handleFulfilledLogout)
      .addCase(authCurrent.fulfilled, handleFulfilledProfile)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
