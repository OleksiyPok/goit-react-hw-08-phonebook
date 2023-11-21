import { useAuth } from '../../hooks';
import { Navigate } from 'react-router';

export const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? children : <Navigate to="/" />;
};
