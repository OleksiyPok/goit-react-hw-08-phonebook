import { Link, Route, Routes } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import { toastParams } from './toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoginPage from 'pages/LoginPage';
import RegistrationPage from 'pages/RegistrationPage';
import ContactsPage from 'pages/ContactsPage';

// import Section from './Section';
// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import FilterForm from './FilterForm';

const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </header>

      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/registration" element={<RegistrationPage />}></Route>
        <Route path="/contacts" element={<ContactsPage />}></Route>
      </Routes>
      {/* <h1>Phonebook</h1>
      <Section>
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <FilterForm />
        <ContactList />
      </Section>
      <ToastContainer {...toastParams} /> */}
    </>
  );
};

export default App;
