import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilteredContacts } from 'redux/selectors';
// import { selectStatus } from 'redux/selectors';
import { getContacts, deleteContact } from 'redux/contacts/contactsOparations';
// import { Loader } from 'components/Loader';

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
  // const loadStatus = useSelector(selectStatus);

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

  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ButtonAddStyled onClick={() => handleOnAdd()}>
        New contact
      </ButtonAddStyled>

      <ContainerStyled>
        {/* <Loader /> */}
        {/* {loadStatus === 'pending' && <Loader />} */}

        <UlStyled>
          {contacts.map(person => (
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
