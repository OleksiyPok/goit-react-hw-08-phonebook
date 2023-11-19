import React from 'react';
import { useState } from 'react';

import { Section } from 'components/Section';
import { ContactList } from 'components/ContactList';
import { FilterForm } from 'components/FilterForm';
import { ModalAdd, ModalEdit } from 'components/Modal';

export const ContactsPage = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [editPerson, setEditPerson] = useState(null);

  const handleModalAddOpen = () => {
    setShowModalAdd(true);
  };

  const handleModalAddClose = () => {
    setShowModalAdd(false);
  };

  const handleModalEditOpen = person => {
    setShowModalEdit(true);
    setEditPerson(person);
  };

  const handleModalEditClose = () => {
    setShowModalEdit(false);
  };

  return (
    <>
      <button type="button" onClick={handleModalAddOpen}>
        New contact
      </button>

      {showModalAdd && <ModalAdd modalClose={handleModalAddClose} />}

      {showModalEdit && (
        <ModalEdit modalClose={handleModalEditClose} person={editPerson} />
      )}

      <Section title="Contacts">
        <FilterForm />
        <ContactList modalOpen={handleModalEditOpen} />
      </Section>
    </>
  );
};
