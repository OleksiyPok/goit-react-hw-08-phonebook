import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router';

import { Layout } from './components/Layout';
import { HomePage } from 'pages/HomePage';
import { RegistrationPage } from 'pages/RegistrationPage';
import { LoginPage } from 'pages/LoginPage';
import { ContactsPage } from 'pages/ContactsPage';
import { routes } from './routes';
import { PrivateRoute } from './routes';
import { PublicRoute } from './routes';
import { authCurrentUser } from 'redux/auth';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path={routes.REGISTRATION_PAGE}
          element={
            <PublicRoute redirectTo="/contacts">
              <RegistrationPage />
            </PublicRoute>
          }
        />
        <Route
          path={routes.LOGIN_PAGE}
          element={
            <PublicRoute redirectTo="/contacts">
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path={routes.CONTACTS_PAGE}
          element={
            <PrivateRoute redirectTo="/login">
              <ContactsPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
