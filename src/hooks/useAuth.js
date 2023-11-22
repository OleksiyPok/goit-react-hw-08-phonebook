import { useSelector } from 'react-redux';

import {
  selectAuthIsLoading,
  selectIsLoggedIn,
  selectToken,
  selectCurrentUser,
  selectIsRefreshing,
  selectError,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  return {
    authIsLoading: useSelector(selectAuthIsLoading),
    authIsLoggedIn: useSelector(selectIsLoggedIn),
    authToken: useSelector(selectToken),
    authCurrentUser: useSelector(selectCurrentUser),
    authIsRefreshing: useSelector(selectIsRefreshing),
    authError: useSelector(selectError),
  };
};
