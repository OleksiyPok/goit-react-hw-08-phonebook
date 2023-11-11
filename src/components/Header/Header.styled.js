import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerStyled = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeaderStyled = styled.div`
  height: 40px;
  background-color: darkblue;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 60px;
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  gap: 25px;
  width: 450px;
  align-items: center;
  /* justify-content: space-between; */
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
    color: orange;
  }
`;

export const UserMenyStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const UserNameStyled = styled.div`
  font-style: italic;
  color: yellow;
  font-weight: 700;
`;

export const LogStyled = styled.span`
  color: white;

  &:hover {
    color: yellow;
  }
  &:active {
    color: orange;
  }
`;
