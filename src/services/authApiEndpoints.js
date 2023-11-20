import { instance, setToken, deleteToken } from './apiConfig';

export const registration = async newUser => {
  const { data } = await instance.post('/users/signup', newUser);
  // console.log('registration data:', data); // develop
  return data;
};

export const login = async user => {
  const { data } = await instance.post('/users/login', user);
  // console.log('login data:', data); // develop
  setToken(data.token);
  return data;
};

export const logout = async user => {
  const { data } = await instance.post('/users/logout', user);
  // console.log('logout data:', data); // develop
  deleteToken();
  return data;
};

export const getCurrent = async () => {
  const { data } = await instance.get('/users/current');
  // console.log('getCurrent data:', data); // develop
  return data;
};
