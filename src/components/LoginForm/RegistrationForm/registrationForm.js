import { useNavigate } from 'react-router';
import { signUp } from 'services/authApiService';

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

    // const newUser = {
    //   name: 'a-ho',
    //   email: 'a4-ho@gmail.com',
    //   password: '123456789',
    // };

    await signUp(newUser).then(() => {
      console.log('created');
      navigate('/login');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input name="name" type="text" className="form__name" id="name" />
      <label htmlFor="email">E-mail</label>
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
  );
};
