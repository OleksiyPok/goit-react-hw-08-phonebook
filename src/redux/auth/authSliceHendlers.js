export const handleFulfilledRegistration = (state, { payload }) => {
  state.isLoading = false;
  // state.token = payload.token;
  // state.isLoggedIn = true;
  // state.currentUser = payload.user;
  state.error = null;
  state.isRefreshing = false;

  console.log('Registration fullfiied');
  console.log('');
};

export const handleFulfilledLogin = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.currentUser = payload.user;
  state.error = null;
  state.isRefreshing = false;

  console.log('Login fullfiied');
  console.log('');
};

export const handleFulfilledLogout = state => {
  state.isLoading = false;
  state.token = null;
  state.isLoggedIn = false;
  state.currentUser = null;
  state.error = null;
  state.isRefreshing = false;

  console.log('Logout fullfiied');
  console.log('');
};

export const handleFulfilledCurrentUser = (state, { payload }) => {
  state.isLoading = false;
  // state.token = payload.token;
  state.isLoggedIn = true;
  state.currentUser = payload;
  state.error = null;
  state.isRefreshing = false;

  console.log('CurrentUser fullfiied');
  console.log('');
};

export const handlePending = state => {
  state.isLoading = true;
  state.token = null;
  state.isLoggedIn = false;
  state.currentUser = null;
  state.error = null;
  state.isRefreshing = true;

  console.log('... pending');
  console.log('');
};

export const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  state.token = null;
  state.isLoggedIn = false;
  state.currentUser = null;
  state.error = error ? error.message : payload;
  state.isRefreshing = false;

  console.log('... rejected');
  console.log('');
};
