import React from 'react';
import { useState } from 'react';

import { Section } from 'components/Section';
import { FilterForm } from 'components/FilterForm';
import { ContactList } from 'components/ContactList';
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
      <Section title="Contacts">
        <FilterForm />

        <ContactList
          modalAddOpen={handleModalAddOpen}
          modalEditOpen={handleModalEditOpen}
        />

        {showModalAdd && <ModalAdd modalClose={handleModalAddClose} />}
        {showModalEdit && (
          <ModalEdit modalClose={handleModalEditClose} person={editPerson} />
        )}
      </Section>
    </>
  );
};
