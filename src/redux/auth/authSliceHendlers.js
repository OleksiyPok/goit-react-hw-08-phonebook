export const handleFulfilledRegistration = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.currentUser = payload.user;

  console.log('Registration fullfiied'); //develop
  console.log(''); //develop
};

export const handleFulfilledLogin = (state, { payload }) => {
  state.isLoading = false;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.currentUser = payload.user;

  console.log('Login fullfiied'); //develop
  console.log(''); //develop
};

export const handleFulfilledLogout = state => {
  state.isLoading = false;
  state.token = null;
  state.isLoggedIn = false;
  state.currentUser = { name: null, email: null };

  console.log('Logout fullfiied'); //develop
  console.log(''); //develop
};

export const handleFulfilledCurrentUser = (state, { payload }) => {
  state.isLoading = false;
  state.isLoggedIn = true;
  state.currentUser = payload;
  state.isRefreshing = false;

  console.log('CurrentUser fullfiied'); //develop
  console.log(''); //develop
};

export const handlePendingCurrentUser = state => {
  state.isLoading = true;

  console.log('CurrentUser pending'); //develop
  console.log(''); //develop
};

export const handleRejectCurrentUser = state => {
  state.isLoading = false;

  console.log('CurrentUser rejected'); //develop
  console.log(''); //develop
};

//-----------------------------------------------

export const handlePending = state => {
  state.isLoading = true;

  console.log('CurrentUser pending'); //develop
  console.log(''); //develop
};

export const handleReject = state => {
  state.isLoading = false;

  console.log('CurrentUser rejected'); //develop
  console.log(''); //develop
};
