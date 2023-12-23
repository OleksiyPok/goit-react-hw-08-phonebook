import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { updateContact } from 'redux/contacts';
import { nameRegex, phoneRegex } from 'constants';

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

export const ModalEdit = ({ modalClose, person }) => {
  const dispatch = useDispatch();

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

  const handleOnUpdate = e => {
    e.preventDefault();

    const currentForm = e.target;
    const { name, number } = currentForm.elements;

    const updatedPerson = {
      id: person.id,
      name: normalize(name.value),
      number: number.value,
    };

    dispatch(updateContact(updatedPerson))
      .unwrap()
      .then(({ name }) => {
        toast.success(`${name} has been updated.`);
      })
      .catch(error => {
        toast.error('Deleting error');
        console.log(error);
      });
    modalClose();

    return currentForm.reset();
  };

  return createPortal(
    <ModalOverlay>
      <ModalForm onSubmit={handleOnUpdate} autoComplete="off">
        <TitleStyled>Edit contact</TitleStyled>

        <ButtonClose type="button" onClick={() => modalClose()}>
          &#10006;
        </ButtonClose>

        <LabelStyled htmlFor="name">Name</LabelStyled>
        <InputStyled
          defaultValue={person.name}
          type="text"
          name="name"
          id="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          pattern={nameRegex}
          autoComplete="off"
          required
        />

        <LabelStyled htmlFor="number">Number</LabelStyled>
        <InputStyled
          defaultValue={person.number}
          type="tel"
          name="number"
          id="number"
          title="Phone number must be at least 5 digits, can contain spaces, dashes, parentheses and can start with +"
          placeholder="+ ..."
          pattern={phoneRegex}
          autoComplete="off"
          required
        />

        <ButtonStyled type="submit">Update contact</ButtonStyled>
      </ModalForm>
    </ModalOverlay>,
    modalRoot
  );
};
