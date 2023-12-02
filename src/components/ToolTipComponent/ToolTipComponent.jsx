import React from 'react';

import { ContainerStyled, TextStyled } from './ToolTipComponent.styled';

export const ToolTipComponent = ({ text }) => {
  return (
    <ContainerStyled>{text && <TextStyled>{text}</TextStyled>}</ContainerStyled>
  );
};
