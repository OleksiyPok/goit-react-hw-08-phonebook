// import { toast } from 'react-toastify';

export const handleFulfilledLogin = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.error = '';
};

export const handleFulfilledLogout = (state, { payload }) => {
  state.isLoading = false;
  state.token = '';
  state.error = '';
  state.profile = '';
};

export const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.token = '';
  state.error = '';
  state.profile = payload;
};

export const handlePending = (state, { payload }) => {
  state.isLoading = true;
  state.token = '';
  state.error = '';
  state.profile = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.token = '';
  state.error = payload;
  state.profile = '';
};
