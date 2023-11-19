import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import { useSelector } from 'react-redux';

import { setToken } from 'services/apiConfig';
import { Header } from 'components/Header';

export const Layout = () => {
  //I don't like this part with token
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
