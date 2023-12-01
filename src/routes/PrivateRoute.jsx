import { useAuth } from '../hooks';
import { Navigate } from 'react-router';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const { authIsLoggedIn } = useAuth();
  return authIsLoggedIn ? children : <Navigate to={redirectTo} />;
};
