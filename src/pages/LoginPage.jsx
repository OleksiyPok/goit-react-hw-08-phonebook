import React from 'react';
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';

import { authLogin } from 'redux/auth/authThunk';
import { authCurrent } from 'redux/auth/authThunk';
import { authLogout } from 'redux/auth/authThunk';

const LoginPage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const isAuth = useSelector(state => state.auth.token);

  // useEffect(() => {
  //   isAuth && navigate('/contacts');
  // }, [isAuth, navigate]);

  const handleLogin = e => {
    e.preventDefault();

    dispatch(
      authLogin({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );
  };

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

      <form onSubmit={handleLogin}>
        <label htmlFor="E-mail">E-mail</label>
        <input name="email" type="email" className="form__email" id="E-mail" />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          className="form__password"
          id="password"
        />
        <button type="submit" className="form__submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginPage;
