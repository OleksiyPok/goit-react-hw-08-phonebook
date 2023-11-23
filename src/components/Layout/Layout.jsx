import { Outlet } from 'react-router';

import { Header } from 'components/Header';

import { ToastContainer } from 'react-toastify';
import { toastParams } from 'components/toastify';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer {...toastParams} />
    </>
  );
};
