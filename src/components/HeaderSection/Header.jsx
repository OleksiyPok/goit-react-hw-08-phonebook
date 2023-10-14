import React from 'react';
import { useSelector } from 'react-redux';

import { authLogout } from 'redux/auth/authThunk';
import { useDispatch } from 'react-redux';

import {
  HeaderStyled,
  NavStyled,
  NavLinkStyled,
  ContainerStyled,
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
          <NavLinkStyled to="/login">Login</NavLinkStyled>
          <NavLinkStyled to="/registration">Registration</NavLinkStyled>
          <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
        </NavStyled>
        <UserNameStyled>{token ? profile.name : ''}</UserNameStyled>
        {token && <button onClick={handleLogout}>Logout</button>}
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default Header;
