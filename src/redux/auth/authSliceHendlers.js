export const handleFulfilledRegistration = (state, { payload }) => {
  state.isLoading = false;
  // state.token = payload.token;
  // state.isLoggedIn = true;
  // state.currentUser = payload.user;
  state.error = null;
};

export const handleFulfilledLogin = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.currentUser = payload.user;
  state.error = null;
};

export const handleFulfilledLogout = state => {
  state.isLoading = false;
  state.token = null;
  state.isLoggedIn = false;
  state.error = null;
  state.currentUser = null;
};

export const handleFulfilledCurrent = (state, { payload }) => {
  state.isLoading = false;
  // state.token = payload.token;
  state.isLoggedIn = true;
  state.currentUser = payload;
  state.error = null;
};

export const handlePending = state => {
  state.isLoading = true;
  state.token = null;
  state.isLoggedIn = false;
  state.currentUser = null;
  state.error = null;
};

export const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  state.token = null;
  state.isLoggedIn = false;
  state.currentUser = null;
  state.error = error ? error.message : payload;
};
