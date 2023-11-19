import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

export const PublicRoute = ({ children }) => {
  const isAuth = useSelector(state => state.auth.isLoggedIn);
  return !isAuth ? children : <Navigate to="/" />;
};
