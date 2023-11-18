import { useDispatch } from 'react-redux';

import { updateContact } from 'redux/contacts/contactsOparations';

import {
  ModalOverlay,
  ModalForm,
  TitleStyled,
  LabelStyled,
  InputStyled,
  ButtonStyled,
  ButtonClose,
} from './Modal.styled';

export const ModalEdit = ({ modalClose, person }) => {
  const dispatch = useDispatch();

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

    dispatch(updateContact(updatedPerson));
    modalClose();

    return currentForm.reset();
  };

  return (
    <ModalOverlay>
      <ModalForm onSubmit={handleOnUpdate} autocomplete="off">
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
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          autocomplete="off"
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
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          autocomplete="off"
          required
        />

        <ButtonStyled type="submit">Update contact</ButtonStyled>
      </ModalForm>
    </ModalOverlay>
  );
};
