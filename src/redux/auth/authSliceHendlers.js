export const handleFulfilledRegistration = (state, { payload }) => {
  state.isLoading = false;
  // state.token = payload.token;
  // state.isLoggedIn = true;
  // state.current = payload.user;
  state.error = '';
};

export const handleFulfilledLogin = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.current = payload.user;
  state.error = '';
};

export const handleFulfilledLogout = state => {
  state.isLoading = false;
  state.token = '';
  state.isLoggedIn = false;
  state.error = '';
  state.current = '';
};

export const handleFulfilledCurrent = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.current = payload;
  state.error = '';
};

export const handlePending = state => {
  state.isLoading = true;
  state.token = '';
  state.isLoggedIn = false;
  state.current = '';
  state.error = '';
};

export const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  state.token = '';
  state.isLoggedIn = false;
  state.current = '';
  state.error = error ? error.message : payload;
};
