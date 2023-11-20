import PropTypes from 'prop-types';

import { ContainerStyled, TitleStyled } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <ContainerStyled>
      {title && <TitleStyled>{title}</TitleStyled>}
      {children && children}
    </ContainerStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
};
