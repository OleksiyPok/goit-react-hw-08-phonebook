import React from 'react';
// import { useEffect } from 'react';

// import { useNavigate } from 'react-router';

import { LoginForm } from 'components/LoginForm/loginForm';

const LoginPage = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   isAuth && navigate('/contacts');
  // }, [isAuth, navigate]);

  return (
    <>
      <h1>Login</h1>

      <LoginForm />
    </>
  );
};

export default LoginPage;
