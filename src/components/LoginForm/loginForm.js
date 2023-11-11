import { authLogin } from 'redux/auth/authOperations';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import {
  FormStyled,
  FormItemStyled,
  LabelStyled,
  InputStyled,
  ButtonStyled,
} from './loginForm.styled';
import { Link } from 'react-router-dom';

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
      .unwrap()
      .then(({ user }) => {
        navigate('/contacts');
        toast.success(`Welcome ${user.name}`);
      })
      .catch(() => toast.error('Error login'));
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
