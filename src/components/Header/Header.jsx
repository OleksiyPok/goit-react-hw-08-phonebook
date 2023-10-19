import React from 'react';
import { useSelector } from 'react-redux';

import { authLogout } from 'redux/auth/authThunk';
import { useDispatch } from 'react-redux';

import {
  HeaderStyled,
  NavStyled,
  NavLinkStyled,
  ContainerStyled,
  UserMenyStyled,
  UserNameStyled,
} from './Header.styled';

const Header = () => {
  const dispatch = useDispatch();
  const { token, profile } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(authLogout());
  };

  return (
    <HeaderStyled>
      <ContainerStyled>
        <NavStyled>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
          <NavLinkStyled to="/login">Login</NavLinkStyled>
          <NavLinkStyled to="/registration">Registration</NavLinkStyled>
        </NavStyled>
        <UserMenyStyled>
          <UserNameStyled>{token ? profile.name : ''}</UserNameStyled>
          {token && <button onClick={handleLogout}>Logout</button>}
        </UserMenyStyled>
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default Header;
