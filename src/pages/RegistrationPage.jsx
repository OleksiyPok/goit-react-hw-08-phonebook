import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from 'services/authApiService';

const RegistrationPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    // const newUser = {
    //   name: 'a-ho',
    //   email: 'a4-ho@gmail.com',
    //   password: '123456789',
    // };

    console.log('newUser:', newUser);

    await signUp(newUser).then(() => {
      console.log('created');
      navigate('/login');
    });
  };
  return (
    <>
      <h1>Registration</h1>
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
    </>
  );
};

export default RegistrationPage;
