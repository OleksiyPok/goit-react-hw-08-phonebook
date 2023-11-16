import React from 'react';
import { useState } from 'react';

import Section from 'components/Section';
// import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import FilterForm from 'components/FilterForm';
import ModalAdd from 'components/ModalAdd';
import ModalEdit from 'components/ModalEdit';

const ContactsPage = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [editPerson, setEditPerson] = useState(null);

  const handleModalAddOpen = () => {
    setShowModalAdd(true);
    console.log('showModal:', showModalAdd);
  };

  const handleModalAddClose = () => {
    setShowModalAdd(false);
    console.log('showModal:', showModalAdd);
  };

  const handleModalEditOpen = person => {
    console.log('person:', person);
    setShowModalEdit(true);
    setEditPerson(person);
    console.log('showModal:', showModalEdit);
  };

  const handleModalEditClose = () => {
    setShowModalEdit(false);
    console.log('showModal:', showModalEdit);
  };

  return (
    <>
      {/* <Section title="New contact"> */}
      {/* <ContactForm /> */}
      <button type="button" onClick={handleModalAddOpen}>
        New contact
      </button>
      {showModalAdd && <ModalAdd modalClose={handleModalAddClose} />}
      {showModalEdit && (
        <ModalEdit modalClose={handleModalEditClose} person={editPerson} />
      )}
      {/* </Section> */}
      <Section title="Contacts">
        <FilterForm />
        <ContactList modalOpen={handleModalEditOpen} />
      </Section>
    </>
  );
};

export default ContactsPage;
