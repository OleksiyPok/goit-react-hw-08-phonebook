import React from 'react';
import { useDispatch } from 'react-redux';

import { loginThunk } from 'redux/auth/authThunk';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = e => {
    e.preventDefault();

    // const user = {
    //   name: 'a-ho',
    //   email: 'a4-ho@gmail.com',
    //   password: '123456789',
    // };

    // const user = {
    //   email: e.target.elements.email.value,
    //   password: e.target.elements.password.value,
    // };

    dispatch(
      loginThunk({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );

    // await login(user).then(console.log);

    // await login(user).then(() => {
    //   console.log('logined');
    // });
  };

  return (
    <>
      <h1>Login</h1>
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
