import React from 'react';

import { useNavigate } from 'react-router';
import { authLogout, authCurrentUser } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { useAuth } from 'hooks';

import {
  HeaderStyled,
  TitleStyled,
  NavStyled,
  NavLinkStyled,
  ContainerStyled,
  UserMenyStyled,
  UserNameStyled,
  LoginStyled,
} from './Header.styled';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, currentUser } = useAuth();

  const handleRegistration = () => {
    navigate('/registration');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    dispatch(authLogout())
      .unwrap()
      .then(() => {
        navigate('/');
        toast.success(`Bye, ${currentUser.name}!`);
      });
  };

  const handleGetCurrentUser = () => {
    dispatch(authCurrentUser());
  };

  return (
    <HeaderStyled>
      <ContainerStyled>
        <NavStyled>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
        </NavStyled>

        <TitleStyled>Phonebook</TitleStyled>

        <UserMenyStyled>
          {isLoggedIn ? (
            <UserNameStyled onClick={handleGetCurrentUser}>
              {currentUser.name}
            </UserNameStyled>
          ) : (
            <LoginStyled onClick={handleRegistration}>Registration</LoginStyled>
          )}

          {isLoggedIn ? (
            <LoginStyled onClick={handleLogout}>Logout</LoginStyled>
          ) : (
            <LoginStyled onClick={handleLogin}>Login</LoginStyled>
          )}
        </UserMenyStyled>
      </ContainerStyled>
    </HeaderStyled>
  );
};
