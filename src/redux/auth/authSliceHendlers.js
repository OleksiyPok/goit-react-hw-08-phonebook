// import { toast } from 'react-toastify';

export const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.error = '';
};

export const handlePending = (state, { payload }) => {
  state.isLoading = true;
  state.token = '';
};

export const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.token = '';
  state.error = error.message;
};
