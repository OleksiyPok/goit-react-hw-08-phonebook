import { useSelector } from 'react-redux';

import {
  selectAuthIsLoading,
  selectIsLoggedIn,
  selectCurrentUser,
  selectIsRefreshing,
} from 'redux/auth';

export const useAuth = () => {
  return {
    authIsLoading: useSelector(selectAuthIsLoading),
    authIsLoggedIn: useSelector(selectIsLoggedIn),
    authCurrentUser: useSelector(selectCurrentUser),
    authIsRefreshing: useSelector(selectIsRefreshing),
  };
};
