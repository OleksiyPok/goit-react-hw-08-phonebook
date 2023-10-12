import { authLogin } from 'redux/auth/authThunk';
import { useDispatch } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();

    const form = e.target;
    const user = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    form.reset();

    dispatch(authLogin(user));
  };

  return (
    <>
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
      ;
    </>
  );
};
