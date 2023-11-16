import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactsList } from 'redux/selectors';

import {
  ModalOverlay,
  ModalWindow,
  TitleStyled,
  FormStyled,
  LabelStyled,
  InputStyled,
  ButtonStyled,
} from './ModalEdit.styled';

const ModalEdit = ({ modalClose }) => {
  const contactsList = useSelector(selectContactsList);

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

    // const currentForm = e.target;
    // const { name, number } = currentForm.elements;

    // const updatedPerson = {
    //   name: normalize(name.value),
    //   number: number.value,
    // };

    // useDispatch(updateContact(updatedPerson));

    // return currentForm.reset();
  };

  return (
    <ModalOverlay>
      <ModalWindow>
        <TitleStyled>Edit contact</TitleStyled>
        <button type="button" onClick={() => modalClose()}>
          Close
        </button>
        <FormStyled onSubmit={handleOnUpdate} autocomplete="off">
          <LabelStyled htmlFor="name">Name</LabelStyled>
          <InputStyled
            type="text"
            name="name"
            id="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            autocomplete="off"
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
            autocomplete="off"
            required
          />
          <ButtonStyled type="submit">Update contact</ButtonStyled>
        </FormStyled>
      </ModalWindow>
    </ModalOverlay>
  );
};

export default ModalEdit;
