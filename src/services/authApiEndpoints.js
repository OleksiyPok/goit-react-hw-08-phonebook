import { publicInstance, privatInstance } from './apiConfig';

export const registration = async newUser => {
  const { data } = await publicInstance.post('/users/signup', newUser);
  return data;
};

export const login = async user => {
  const { data } = await publicInstance.post('/users/login', user);
  return data;
};

export const logout = async user => {
  const { data } = await privatInstance.post('/users/logout', user);
  return data;
};

export const getCurrentUser = async () => {
  const { data } = await privatInstance.get('/users/current');
  return data;
};
