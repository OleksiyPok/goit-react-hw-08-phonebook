import { createSlice } from '@reduxjs/toolkit';

import {
  authRegistration,
  authLogin,
  authLogout,
  authCurrent,
} from './authOperations';

import {
  handleFulfilledRegistration,
  handleFulfilledLogin,
  handleFulfilledLogout,
  handleFulfilledCurrent,
  handlePending,
  handleRejected,
} from './authSliceHendlers';
import { authInitialState } from './authInitialState';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(authRegistration.fulfilled, handleFulfilledRegistration)
      .addCase(authLogin.fulfilled, handleFulfilledLogin)
      .addCase(authLogout.fulfilled, handleFulfilledLogout)
      .addCase(authCurrent.fulfilled, handleFulfilledCurrent)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
