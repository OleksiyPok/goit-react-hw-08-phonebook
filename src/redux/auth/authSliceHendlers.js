export const handleRegistration = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.currentUser = payload.user;

  console.log('Registration fulfilled'); //develop
  console.log(''); //develop
};

export const handleLogin = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.currentUser = payload.user;

  console.log('Login fulfilled'); //develop
  console.log(''); //develop
};

export const handleLogout = state => {
  state.isLoading = false;
  state.token = null;
  state.isLoggedIn = false;
  state.currentUser = { name: null, email: null };

  console.log('Logout fulfilled'); //develop
  console.log(''); //develop
};

export const handleCurrentUser = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.currentUser = payload;

  console.log('CurrentUser fulfilled'); //develop
  console.log(''); //develop
};

export const handlePending = state => {
  state.isLoading = true;

  console.log('Auth pending'); //develop
  console.log(''); //develop
};

export const handleRejected = state => {
  state.isLoading = false;

  console.log('Auth rejected'); //develop
  console.log(''); //develop
};
