import { Routes, Route } from 'react-router';

import { Layout } from './Layout';
import { HomePage } from 'pages/HomePage';
import { RegistrationPage } from 'pages/RegistrationPage';
import { LoginPage } from 'pages/LoginPage';
import { ContactsPage } from 'pages/ContactsPage';
import routes from 'routes';

// import { PrivateRoute } from './PrivateRoute';
// import { PublicRoute } from './PublicRoute';

import { ToastContainer } from 'react-toastify';
import { toastParams } from 'components/toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path={routes.REGISTRATION_PAGE}
            element={
              // <PublicRoute>
              <RegistrationPage />
              // </PublicRoute>
            }
          />
          <Route
            path={routes.LOGIN_PAGE}
            element={
              // <PublicRoute>
              <LoginPage />
              // </PublicRoute>
            }
          />
          <Route
            path={routes.CONTACTS_PAGE}
            element={
              // <PrivateRoute>
              <ContactsPage />
              // </PrivateRoute>
            }
          />
        </Route>
      </Routes>
      <ToastContainer {...toastParams} />
    </div>
  );
};

export default App;
