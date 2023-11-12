export const handleFulfilledRegistration = (state, { payload }) => {
  state.isLoading = false;
  // state.token = payload.token;
  // state.isLoggedIn = true;
  // state.current = payload.user;
  state.error = null;
};

export const handleFulfilledLogin = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.current = payload.user;
  state.error = null;
};

export const handleFulfilledLogout = state => {
  state.isLoading = false;
  state.token = null;
  state.isLoggedIn = false;
  state.error = null;
  state.current = null;
};

export const handleFulfilledCurrent = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.current = payload;
  state.error = null;
};

export const handlePending = state => {
  state.isLoading = true;
  state.token = null;
  state.isLoggedIn = false;
  state.current = null;
  state.error = null;
};

export const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  state.token = null;
  state.isLoggedIn = false;
  state.current = null;
  state.error = error ? error.message : payload;
};
