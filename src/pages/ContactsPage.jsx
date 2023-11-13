import React from 'react';

import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import FilterForm from 'components/FilterForm';
import ModalAdd from 'components/ModalAdd';

const ContactsPage = () => {
  return (
    <>
      <Section title="New contact">
        {/* <ContactForm /> */}
        <ModalAdd />
      </Section>
      <Section title="Contacts">
        <FilterForm />
        <ContactList />
      </Section>
    </>
  );
};

export default ContactsPage;
