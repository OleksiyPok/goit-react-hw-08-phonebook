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
  // handlePendingCurrentUser,
  // handleRejectCurrentUser,
  handlePending,
  handleReject,
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
      // .addCase(authCurrentUser.pending, handlePendingCurrentUser)
      // .addCase(authCurrentUser.rejected, handleRejectCurrentUser)

      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleReject);
  },
});

export const authReducer = authSlice.reducer;
