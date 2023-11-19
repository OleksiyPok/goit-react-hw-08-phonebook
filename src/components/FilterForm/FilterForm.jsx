import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/contacts/filterSlice';

import { Container, Label, Input } from './FilterForm.styled';

export const FilterForm = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const filterString = e.target.value;
    dispatch(setFilter(filterString.toLowerCase()));
  };

  return (
    <Container>
      <Label>Find contacts by name {}</Label>
      <Input
        type="text"
        name="personName"
        id="personName"
        autocomplete="off"
        onChange={handleChange}
        required
      />
    </Container>
  );
};
