import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilteredContacts } from 'redux/selectors';
// import { selectStatus } from 'redux/selectors';
import {
  getContacts,
  // editContact,
  deleteContact,
} from 'redux/contacts/contactsOparations';
// import { Loader } from 'components/Loader/Loader';

import {
  UlStyled,
  LiStyled,
  PStyled,
  SpanStyled,
  ButtonBlock,
  ButtonStyled,
} from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  // const loadStatus = useSelector(selectStatus);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleOnEdit = person => {
    // dispatch(editContact(person));
  };

  const handleOnDelete = person => {
    dispatch(deleteContact(person));
  };

  const contacts = useSelector(selectFilteredContacts);
  const contactsLength = contacts.length;

  return (
    <>
      {/* <Loader /> */}
      {/* {loadStatus === 'pending' && <Loader />} */}
      <PStyled>Amount of contacts: {contactsLength}</PStyled>
      <UlStyled>
        {contacts.map(person => (
          <LiStyled key={person.id}>
            <SpanStyled>{person.name}:</SpanStyled>
            <SpanStyled>{person.number}</SpanStyled>
            <ButtonBlock>
              <ButtonStyled
                onClick={() => {
                  handleOnEdit(person);
                }}
              >
                Edit
              </ButtonStyled>
              <ButtonStyled
                onClick={() => {
                  handleOnDelete(person);
                }}
              >
                Delete
              </ButtonStyled>
            </ButtonBlock>
          </LiStyled>
        ))}
      </UlStyled>
    </>
  );
};

export default ContactList;
