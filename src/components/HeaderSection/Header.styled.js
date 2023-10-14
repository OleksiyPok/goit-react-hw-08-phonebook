import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerStyled = styled.div`
  width: 90%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeaderStyled = styled.div`
  height: 40px;
  background-color: darkblue;

  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    height: 60px;
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 25px;
  list-style: none;
`;

export const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  &:hover {
    color: yellow;
  }
  &:active {
    color: orange;
  }
  &.active {
    color: yellow;
    font-weight: 700;
  }
`;

export const UserNameStyled = styled(NavLink)`
  color: white;
  font-weight: 700;
`;
