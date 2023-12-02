import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const TitleStyled = styled.h1`
  color: white;
  text-decoration: none;
`;

export const ContainerStyled = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  height: 40px;
  width: 100%;
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
  align-items: center;
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

export const LoginStyled = styled.span`
  color: white;

  &:hover {
    color: yellow;
    cursor: pointer;
  }
  &:active {
    color: orange;
  }
`;
