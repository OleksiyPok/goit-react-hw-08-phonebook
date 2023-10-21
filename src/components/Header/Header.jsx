import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { authLogout } from 'redux/auth/authThunk';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

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
  const navigate = useNavigate();
  const { isLogged, profile } = useSelector(state => state.auth);

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
          <NavLinkStyled to="/login">Login</NavLinkStyled>
          <NavLinkStyled to="/registration">Registration</NavLinkStyled>
        </NavStyled>
        <UserMenyStyled>
          <UserNameStyled>{isLogged ? profile.name : ''}</UserNameStyled>
          {isLogged && <button onClick={handleLogout}>Logout</button>}
        </UserMenyStyled>
      </ContainerStyled>
    </HeaderStyled>
  );
};

export default Header;
