import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useFilter } from 'hooks';
import { getContacts, deleteContact } from 'redux/contacts/contactsOperations';

import {
  ContainerStyled,
  ButtonAddStyled,
  UlStyled,
  LiStyled,
  SpanStyled,
  ButtonBlock,
  ButtonStyled,
} from './ContactList.styled';

export const ContactList = ({ modalAddOpen, modalEditOpen }) => {
  const dispatch = useDispatch();
  const { filteredContacts } = useFilter();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleOnAdd = person => {
    modalAddOpen(person);
  };

  const handleOnEdit = person => {
    modalEditOpen(person);
  };

  const handleOnDelete = person => {
    dispatch(deleteContact(person));
  };

  return (
    <>
      <ButtonAddStyled onClick={() => handleOnAdd()}>
        New contact
      </ButtonAddStyled>

      <ContainerStyled>
        {/* <Loader /> */}
        {/* {loadStatus === 'pending' && <Loader />} */}

        <UlStyled>
          {filteredContacts.map(person => (
            <LiStyled key={person.id}>
              <SpanStyled>{person.name}:</SpanStyled>
              <SpanStyled>{person.number}</SpanStyled>
              <ButtonBlock>
                <ButtonStyled onClick={() => handleOnEdit(person)}>
                  Edit
                </ButtonStyled>
                <ButtonStyled onClick={() => handleOnDelete(person)}>
                  Delete
                </ButtonStyled>
              </ButtonBlock>
            </LiStyled>
          ))}
        </UlStyled>
      </ContainerStyled>
    </>
  );
};
