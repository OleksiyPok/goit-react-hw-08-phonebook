import { useSelector } from 'react-redux';

import {
  selectIsLoggedIn,
  selectCurrentUser,
  selectIsRefreshing,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    currentUser: useSelector(selectCurrentUser),
    isRefreshing: useSelector(selectIsRefreshing),
  };
};
