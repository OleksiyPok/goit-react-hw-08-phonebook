import React from 'react';
import { FilterForm } from 'components/FilterForm';

import { Container, ButtonStyled } from './ContactsSearchAndNew.styled';

export const ContactsSearchAndNew = ({ modalOpen }) => {
  const handleOnAdd = () => {
    modalOpen();
  };

  return (
    <>
      <Container>
        <FilterForm />
        <ButtonStyled type="button" onClick={handleOnAdd}>
          New contact
        </ButtonStyled>
      </Container>
    </>
  );
};
