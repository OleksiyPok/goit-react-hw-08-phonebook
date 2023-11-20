import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filter/filterSlice';
import { useFilter } from 'hooks';

import { ContainerStyled, LabelStyled, InputStyled } from './FilterForm.styled';

export const FilterForm = () => {
  const dispatch = useDispatch();
  const { filteredAmount } = useFilter();

  const handleChange = e => {
    const filterString = e.target.value;
    dispatch(setFilter(filterString.toLowerCase()));
  };

  return (
    <>
      <ContainerStyled>
        <LabelStyled>Find person</LabelStyled>

        <InputStyled
          type="text"
          name="personName"
          id="personName"
          autoComplete="off"
          onChange={handleChange}
          required
        />

        <LabelStyled>Amount of contacts: {filteredAmount}</LabelStyled>
      </ContainerStyled>
    </>
  );
};
