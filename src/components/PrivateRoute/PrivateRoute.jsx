import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

import PropTypes from 'prop-types';

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(state => state.auth.isLoggedIn);
  return isAuth ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
