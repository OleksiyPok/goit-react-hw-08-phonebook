import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

import PropTypes from 'prop-types';

export const PublicRoute = ({ children }) => {
  const isAuth = useSelector(state => state.auth.isLoggedIn);
  return !isAuth ? children : <Navigate to="/" />;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
