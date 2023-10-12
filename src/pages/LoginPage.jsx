import React from 'react';
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';

import { LoginForm } from 'components/LoginForm/loginForm';

import { authCurrent } from 'redux/auth/authThunk';
import { authLogout } from 'redux/auth/authThunk';

const LoginPage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const isAuth = useSelector(state => state.auth.token);

  // useEffect(() => {
  //   isAuth && navigate('/contacts');
  // }, [isAuth, navigate]);

  const handleLogout = () => {
    dispatch(authLogout());
  };

  const handleProfile = () => {
    dispatch(authCurrent());
  };

  const handleIsLogin = () => {
    console.log('isAuth:', isAuth ? 'TRUE' : 'FALSE');
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleProfile}>Profile</button>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleIsLogin}>isLogin</button>

      <LoginForm />
    </>
  );
};

export default LoginPage;
