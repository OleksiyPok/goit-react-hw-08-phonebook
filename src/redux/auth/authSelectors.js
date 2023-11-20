export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectToken = state => state.auth.token;
export const selectCurrentUser = state => state.auth.currentUser;
export const selectIsRefrashing = state => state.auth.isRefrashing;
export const selectError = state => state.auth.error;
