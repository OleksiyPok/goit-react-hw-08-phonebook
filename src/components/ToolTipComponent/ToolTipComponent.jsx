import React from 'react';

import PropTypes from 'prop-types';

import { ContainerStyled, TextStyled } from './ToolTipComponent.styled';

export const ToolTipComponent = ({ text }) => {
  return (
    <ContainerStyled>{text && <TextStyled>{text}</TextStyled>}</ContainerStyled>
  );
};

Section.propTypes = {
  text: PropTypes.string,
};