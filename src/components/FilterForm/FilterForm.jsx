import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/contacts/filterSlice';

import { ContainerStyled, Label, Input } from './FilterForm.styled';

export const FilterForm = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const filterString = e.target.value;
    dispatch(setFilter(filterString.toLowerCase()));
  };

  return (
    <>
      <ContainerStyled>
        <Label>Find contacts by name</Label>
        <Input
          type="text"
          name="personName"
          id="personName"
          autocomplete="off"
          onChange={handleChange}
          required
        />
      </ContainerStyled>
    </>
  );
};
