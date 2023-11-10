export const handleFulfilledLogin = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.profile = payload.user;
  state.error = '';
};

export const handleFulfilledLogout = state => {
  state.isLoading = false;
  state.token = '';
  state.isLoggedIn = false;
  state.error = '';
  state.profile = '';
};

export const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.token = '';
  state.isLoggedIn = true;
  state.profile = payload;
  state.error = '';
};

export const handlePending = state => {
  state.isLoading = true;
  state.token = '';
  state.isLoggedIn = false;
  state.profile = '';
  state.error = '';
};

export const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  state.token = '';
  state.isLoggedIn = false;
  state.profile = '';
  state.error = error ? error.message : payload;
};
