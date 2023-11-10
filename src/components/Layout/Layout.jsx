import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';

import { setToken } from 'services/authApiService';
import Header from 'components/Header/Header';

const Layout = () => {
  const { isLoggedIn, token } = useSelector(state => state.auth);
  useEffect(() => {
    if (isLoggedIn) {
      setToken(token);
    }
  }, [token, isLoggedIn]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
