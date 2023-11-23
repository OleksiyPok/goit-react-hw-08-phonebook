import { createSlice } from '@reduxjs/toolkit';

import { authInitialState } from './authInitialState';

import {
  authRegistration,
  authLogin,
  authLogout,
  authCurrentUser,
} from './authOperations';

import {
  handleFulfilledRegistration,
  handleFulfilledLogin,
  handleFulfilledLogout,
  handleFulfilledCurrentUser,
  handlePendingCurrentUser,
  handleRejectCurrentUser,
} from './authSliceHendlers';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(authRegistration.fulfilled, handleFulfilledRegistration)
      .addCase(authLogin.fulfilled, handleFulfilledLogin)
      .addCase(authLogout.fulfilled, handleFulfilledLogout)
      .addCase(authCurrentUser.fulfilled, handleFulfilledCurrentUser)
      .addCase(authCurrentUser.pending, handlePendingCurrentUser)
      .addCase(authCurrentUser.rejected, handleRejectCurrentUser);
  },
});

export const authReducer = authSlice.reducer;
