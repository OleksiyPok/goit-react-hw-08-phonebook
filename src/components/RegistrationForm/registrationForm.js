import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { signUp } from 'services/authApiService';

import {
  FormStyled,
  FormItemStyled,
  LabelStyled,
  InputStyled,
  ButtonStyled,
} from './registrationForm.styled';

export const RegistrationForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.target;
    const newUser = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    form.reset();

    await signUp(newUser).then(() => {
      console.log('created');
      navigate('/login');
    });
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <FormItemStyled>
        <LabelStyled htmlFor="name">Name:</LabelStyled>
        <InputStyled name="name" type="text" className="form__name" id="name" />
      </FormItemStyled>
      <FormItemStyled>
        <LabelStyled htmlFor="email">E-mail:</LabelStyled>
        <InputStyled
          name="email"
          type="email"
          className="form__email"
          id="E-mail"
        />
      </FormItemStyled>
      <FormItemStyled>
        <LabelStyled htmlFor="password">Password:</LabelStyled>
        <InputStyled
          name="password"
          type="password"
          className="form__password"
          id="password"
        />
      </FormItemStyled>

      <ButtonStyled type="submit" className="form__submit">
        Submit
      </ButtonStyled>

      <span>Already registered?</span>
      <Link to="/login">To login</Link>
    </FormStyled>
  );
};
