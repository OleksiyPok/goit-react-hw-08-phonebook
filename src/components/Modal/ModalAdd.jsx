import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

import { useContacts } from 'hooks';
import { addContact } from 'redux/contacts/contactsOperations';

import {
  ModalOverlay,
  ModalForm,
  TitleStyled,
  LabelStyled,
  InputStyled,
  ButtonStyled,
  ButtonClose,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalAdd = ({ modalClose }) => {
  const dispatch = useDispatch();
  const { contactsList } = useContacts();

  useEffect(() => {
    const handleCloseModal = e => {
      if (e.code === 'Escape') {
        modalClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleCloseModal);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleCloseModal);
    };
  }, [modalClose]);

  const normalize = sentence => {
    const wordsArr = sentence
      .trim()
      .replace(/  +/g, ' ')
      .toLowerCase()
      .split(' ');

    const normalizedSentence = wordsArr
      .map(word => {
        const [first, ...rest] = word;
        return first.toUpperCase() + rest.join('');
      })
      .join(' ');

    return normalizedSentence;
  };

  const handleOnAdd = e => {
    e.preventDefault();

    const currentForm = e.target;
    const { name, number } = currentForm.elements;

    const newPerson = {
      id: nanoid(),
      name: normalize(name.value),
      number: number.value,
    };

    if (contactsList.some(person => newPerson.name === person.name)) {
      toast.error(`${newPerson.name} is already in contacts.`);
    } else {
      dispatch(addContact(newPerson))
        .unwrap()
        .then(({ name }) => {
          toast.success(`${name} has been added to contacts.`);
        })
        .catch(error => {
          toast.error('Adding error');
          console.log(error);
        });
      modalClose();
    }
    return currentForm.reset();
  };

  return createPortal(
    <ModalOverlay>
      <ModalForm onSubmit={handleOnAdd} autoComplete="off">
        <TitleStyled>New contact</TitleStyled>

        <ButtonClose type="button" onClick={() => modalClose()}>
          &#10006;
        </ButtonClose>

        <LabelStyled htmlFor="name">Name</LabelStyled>
        <InputStyled
          type="text"
          name="name"
          id="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          autoComplete="off"
          required
        />

        <LabelStyled htmlFor="number">Number</LabelStyled>
        <InputStyled
          type="tel"
          name="number"
          id="number"
          title="Phone number must be at least 5 digits, can contain spaces, dashes, parentheses and can start with +"
          placeholder="+ ..."
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          autoComplete="off"
          required
        />

        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </ModalForm>
    </ModalOverlay>,
    modalRoot
  );
};
