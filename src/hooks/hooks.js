import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectToken } from 'redux/selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    token: useSelector(selectToken),
  };
};
