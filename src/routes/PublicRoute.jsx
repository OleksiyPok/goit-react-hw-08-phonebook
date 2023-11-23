import { useAuth } from '../hooks';
import { Navigate } from 'react-router';

export const PublicRoute = ({ children, redirectTo = '/' }) => {
  const { authIsLoggedIn } = useAuth();
  return !authIsLoggedIn ? children : <Navigate to={redirectTo} />;
};
