export const handleFulfilledRegistration = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.currentUser = payload.user;

  console.log('Registration fullfiied');
  console.log('');
};

export const handleFulfilledLogin = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.currentUser = payload.user;

  console.log('Login fullfiied');
  console.log('');
};

export const handleFulfilledLogout = state => {
  state.isLoading = false;
  state.token = null;
  state.isLoggedIn = false;
  state.currentUser = { name: null, email: null };

  console.log('Logout fullfiied');
  console.log('');
};

export const handleFulfilledCurrentUser = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.currentUser = payload;
  state.isRefreshing = false;

  console.log('CurrentUser fullfiied');
  console.log('');
};

export const handlePendingCurrentUser = state => {
  state.isRefreshing = true;

  console.log('CurrentUser pending');
  console.log('');
};

export const handleRejectCurrentUser = state => {
  state.isRefreshing = false;

  console.log('CurrentUser rejected');
  console.log('');
};
