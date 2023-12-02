import { useSelector } from 'react-redux';

import {
  selectAuthIsLoading,
  selectIsLoggedIn,
  selectCurrentUser,
} from 'redux/auth';

export const useAuth = () => {
  return {
    authIsLoading: useSelector(selectAuthIsLoading),
    authIsLoggedIn: useSelector(selectIsLoggedIn),
    authCurrentUser: useSelector(selectCurrentUser),
  };
};
