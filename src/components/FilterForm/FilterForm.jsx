import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'redux/filter/filterSlice';
import { selectFilteredContacts } from 'redux/filter/filterSelectors';

import { ContainerStyled, LabelStyled, InputStyled } from './FilterForm.styled';

export const FilterForm = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const filterString = e.target.value;
    dispatch(setFilter(filterString.toLowerCase()));
  };

  const contacts = useSelector(selectFilteredContacts);
  const contactsLength = contacts.length;

  return (
    <>
      <ContainerStyled>
        <LabelStyled>Find contact</LabelStyled>

        <InputStyled
          type="text"
          name="personName"
          id="personName"
          autoComplete="off"
          onChange={handleChange}
          required
        />

        <LabelStyled>Amount of contacts: {contactsLength}</LabelStyled>
      </ContainerStyled>
    </>
  );
};
