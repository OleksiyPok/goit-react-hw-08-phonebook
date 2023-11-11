import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { authLogin } from 'redux/auth/authOperations';
import { toast } from 'react-toastify';

import {
  FormStyled,
  FormItemStyled,
  LabelStyled,
  InputStyled,
  ButtonStyled,
} from './loginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();

    const form = e.target;
    const user = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    form.reset();

    dispatch(authLogin(user))
      .then(({ user }) => {
        navigate('/contacts');
        toast.success(`Welcome ${user.name}`);
      })
      .catch(() => {
        toast.error('Login error');
      });
  };

  return (
    <>
      <FormStyled onSubmit={handleLogin}>
        <FormItemStyled>
          <LabelStyled htmlFor="E-mail">E-mail:</LabelStyled>
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
        <span>Not registered yet?</span>

        <Link to="/registration">To registration</Link>
      </FormStyled>
    </>
  );
};
