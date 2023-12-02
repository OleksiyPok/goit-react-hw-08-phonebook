import { createSlice } from '@reduxjs/toolkit';

import { authInitialState } from './authInitialState';

import {
  authRegistration,
  authLogin,
  authLogout,
  authCurrentUser,
} from './authOperations';

import {
  handleRegistration,
  handleLogin,
  handleLogout,
  handleCurrentUser,
  handlePending,
  handleRejected,
} from './authSliceHendlers';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: builder => {
    builder
      .addCase(authRegistration.fulfilled, handleRegistration)
      .addCase(authLogin.fulfilled, handleLogin)
      .addCase(authLogout.fulfilled, handleLogout)
      .addCase(authCurrentUser.fulfilled, handleCurrentUser)

      .addMatcher(action => {
        return action.type.includes('auth') && action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        return (
          action.type.includes('auth') && action.type.endsWith('/rejected')
        );
      }, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
