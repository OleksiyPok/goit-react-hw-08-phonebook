import React, { useEffect } from 'react';
import { Outlet } from 'react-router';

import { useAuth } from 'hooks';
import { setToken } from 'services/apiConfig';
import { Header } from 'components/Header';

export const Layout = () => {
  //I don't like this part with token
  const { authIsLoggedIn: isLoggedIn, token } = useAuth();

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
