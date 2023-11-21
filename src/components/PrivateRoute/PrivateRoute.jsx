import { useAuth } from '../../hooks';
import { Navigate } from 'react-router';

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" />;
};
