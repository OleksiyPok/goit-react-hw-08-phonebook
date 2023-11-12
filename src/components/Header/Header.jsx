import React from 'react';

import { useNavigate } from 'react-router';
import { authLogout } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { useAuth } from 'hooks/hooks';

import {
  HeaderStyled,
  NavStyled,
  NavLinkStyled,
  ContainerStyled,
  UserMenyStyled,
  UserNameStyled,
  LogStyled,
} from './Header.styled';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, current } = useAuth();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    dispatch(authLogout())
      .unwrap()
      .then(() => {
        navigate('/');
        toast.success(`Bye, ${current.name}!`);
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
          <UserNameStyled>{isLoggedIn ? current.name : ''}</UserNameStyled>
          {isLoggedIn && <LogStyled onClick={handleLogout}>Logout</LogStyled>}
          {!isLoggedIn && <LogStyled onClick={handleLogin}>Login</LogStyled>}
        </UserMenyStyled>
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default Header;
