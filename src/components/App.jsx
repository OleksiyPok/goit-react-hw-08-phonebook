import { Routes, Route } from 'react-router';

import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
import RegistrationPage from 'pages/RegistrationPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import routes from 'routes';

const App = () => {
  return (
    <>
      <h1>Phonebook</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path={routes.REGISTRATION_PAGE}
            element={<RegistrationPage />}
          />
          <Route path={routes.LOGIN_PAGE} element={<LoginPage />} />
          <Route path={routes.CONTACTS_PAGE} element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;