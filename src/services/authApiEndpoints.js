import { publicInstance, privatInstance } from './apiConfig';

export const registration = async newUser => {
  // console.log('registration =>');
  const { data } = await publicInstance.post('/users/signup', newUser);
  // console.log('registration response data:', data); // develop
  return data;
};

export const login = async user => {
  // console.log('login =>'); // develop
  const { data } = await publicInstance.post('/users/login', user);
  // console.log('login response data:', data); // develop
  return data;
};

export const logout = async user => {
  // console.log('logout =>'); // develop
  const { data } = await privatInstance.post('/users/logout', user);
  // console.log('logout response data:', data); // develop
  return data;
};

export const getCurrentUser = async () => {
  // console.log('getCurrentUser =>'); // develop
  const { data } = await privatInstance.get('/users/current');
  // console.log('getCurrentUser response data:', data); // develop
  return data;
};
