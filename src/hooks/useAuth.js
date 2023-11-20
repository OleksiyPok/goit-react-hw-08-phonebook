import { useSelector } from 'react-redux';

import {
  selectIsLoggedIn,
  selectCurrentUser,
  selectIsRefrashing,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    currentUser: useSelector(selectCurrentUser),
    isRefrashing: useSelector(selectIsRefrashing),
  };
};
