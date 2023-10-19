import PropTypes from 'prop-types';

import { ContainerStyled, TitleStyled } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <ContainerStyled>
      {title && <TitleStyled>{title}</TitleStyled>}
      {children && children}
    </ContainerStyled>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
