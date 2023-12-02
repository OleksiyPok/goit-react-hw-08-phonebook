import React from 'react';

import { ContainerStyled, TitleStyled } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <ContainerStyled>
      {title && <TitleStyled>{title}</TitleStyled>}
      {children && children}
    </ContainerStyled>
  );
};
