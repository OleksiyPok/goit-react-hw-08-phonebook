import React from 'react';

import Section from 'components/Section';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <>
      <Section title="Registration">
        <RegistrationForm />
      </Section>
    </>
  );
};

export default RegistrationPage;
