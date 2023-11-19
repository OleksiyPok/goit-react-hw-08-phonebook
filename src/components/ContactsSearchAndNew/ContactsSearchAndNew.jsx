import React from 'react';
import { FilterForm } from 'components/FilterForm';

import { ContainerStyled, ButtonStyled } from './ContactsSearchAndNew.styled';

export const ContactsSearchAndNew = ({ modalOpen }) => {
  const handleOnAdd = () => {
    modalOpen();
  };

  return (
    <>
      <ContainerStyled>
        <FilterForm />
        <ButtonStyled type="button" onClick={handleOnAdd}>
          New contact
        </ButtonStyled>
      </ContainerStyled>
    </>
  );
};
