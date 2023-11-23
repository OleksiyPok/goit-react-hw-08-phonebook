import { instance } from './apiConfig';

export const registration = async newUser => {
  // console.log('registration =>');

  const { data } = await instance.post('/users/signup', newUser);
  // console.log('registration response data:', data); // develop

  return data;
};

export const login = async user => {
  // console.log('login =>'); // develop

  const { data } = await instance.post('/users/login', user);
  // console.log('login response data:', data); // develop

  return data;
};

export const logout = async user => {
  // console.log('logout =>'); // develop

  const { data } = await instance.post('/users/logout', user);
  // console.log('logout response data:', data); // develop

  return data;
};

export const getCurrentUser = async () => {
  // console.log('getCurrentUser =>'); // develop

  const { data } = await instance.get('/users/current');
  // console.log('getCurrentUser response data:', data); // develop

  return data;
};
