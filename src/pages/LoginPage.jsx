import React from 'react';
// import { useEffect } from 'react';

// import { useNavigate } from 'react-router';

import Section from 'components/Section';
import { LoginForm } from 'components/LoginForm/loginForm';

const LoginPage = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   isAuth && navigate('/contacts');
  // }, [isAuth, navigate]);

  return (
    <>
      <Section title="Login">
        <LoginForm />
      </Section>
    </>
  );
};

export default LoginPage;
