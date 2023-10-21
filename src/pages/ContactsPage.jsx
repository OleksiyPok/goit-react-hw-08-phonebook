import React from 'react';
// import { ToastContainer } from 'react-toastify';
// import { toastParams } from 'components/toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { useDispatch } from 'react-redux';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import FilterForm from 'components/FilterForm';

const ContactsPage = () => {
  return (
    <>
      <Section title="New contact">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <FilterForm />
        <ContactList />
      </Section>
      {/* <ToastContainer {...toastParams} /> */}
    </>
  );
};

export default ContactsPage;
