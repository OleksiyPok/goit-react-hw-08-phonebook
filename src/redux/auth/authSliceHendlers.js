export const handleRegistration = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.currentUser = payload.user;
};

export const handleLogin = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.currentUser = payload.user;
};

export const handleLogout = state => {
  state.isLoading = false;
  state.token = null;
  state.isLoggedIn = false;
  state.currentUser = { name: null, email: null };
};

export const handleCurrentUser = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.currentUser = payload;
};

export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = state => {
  state.isLoading = false;
};
