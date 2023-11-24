import { Outlet } from 'react-router';

import { useAuth, useContacts } from 'hooks';
import { Loader } from 'components/Loader';
import { Header } from 'components/Header';

import { ToastContainer } from 'react-toastify';
import { toastParams } from 'components/toastify';

export const Layout = () => {
  const { authIsLoading } = useAuth();
  const { contactsIsLoading } = useContacts();
  return (
    <>
      {(authIsLoading || contactsIsLoading) && <Loader />}

      <Header />
      <Outlet />

      <ToastContainer {...toastParams} />
    </>
  );
};
