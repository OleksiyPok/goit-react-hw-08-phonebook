import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { authLogout } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import {
  HeaderStyled,
  NavStyled,
  NavLinkStyled,
  ContainerStyled,
  UserMenyStyled,
  UserNameStyled,
  SpanStyled,
} from './Header.styled';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, profile } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(authLogout())
      .unwrap()
      .then(() => {
        navigate('/');
        toast.success(`Bye!`);
      });
  };

  return (
    <HeaderStyled>
      <ContainerStyled>
        <NavStyled>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
          {/* {!isLoggedIn && <NavLinkStyled to="/login">Login</NavLinkStyled>}
          {!isLoggedIn && (
            <NavLinkStyled to="/registration">Registration</NavLinkStyled>
          )} */}
        </NavStyled>
        <UserMenyStyled>
          <UserNameStyled>{isLoggedIn ? profile.name : ''}</UserNameStyled>
          {isLoggedIn && (
            <SpanStyled to="" onClick={handleLogout}>
              Logout
            </SpanStyled>
          )}
          {!isLoggedIn && <NavLinkStyled to="/login">Login</NavLinkStyled>}
        </UserMenyStyled>
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default Header;
