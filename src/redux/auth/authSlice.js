import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from './authThunk';

const iniialState = {
  isLoading: false,
  token: '',
  error: '',
};

const handlePending = (state, { payload }) => {
  state.isLoading = true;
  state.token = '';
};

const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.token = '';
  state.error = error.message;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.error = '';
};

const authSlice = createSlice({
  name: 'auth',
  iniialState,
  // reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
