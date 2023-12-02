import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { authRegistration } from 'redux/auth';
import { toast } from 'react-toastify';

import {
  FormStyled,
  FormItemStyled,
  LabelStyled,
  InputStyled,
  ButtonStyled,
} from './RegistrationForm.styled';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegistration = async e => {
    e.preventDefault();

    const form = e.target;
    const newUser = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    form.reset();

    dispatch(authRegistration(newUser))
      .unwrap()
      .then(({ user }) => {
        navigate('/login');
        toast.success(`New user ${user.name} has been registered`); // "user" from backend
      })
      .catch(error => {
        toast.error(`New user ${newUser.name} has not been registered`); // "newUser" from registrationForm
        console.log(error);
      });
  };

  return (
    <FormStyled onSubmit={handleRegistration}>
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
