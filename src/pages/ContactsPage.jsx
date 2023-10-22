import React from 'react';

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
    </>
  );
};

export default ContactsPage;
