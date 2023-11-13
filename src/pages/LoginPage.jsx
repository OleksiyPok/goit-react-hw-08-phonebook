import React from 'react';

import Section from 'components/Section';
import { LoginForm } from 'components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Section title="Login">
        <LoginForm />
      </Section>
    </>
  );
};

export default LoginPage;
