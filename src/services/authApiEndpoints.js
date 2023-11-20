import { instance, setToken, deleteToken } from './apiConfig';

export const registration = async newUser => {
  const { data } = await instance.post('/users/signup', newUser);
  // console.log('post responce:', data); // develop
  return data;
};

export const login = async user => {
  const { data } = await instance.post('/users/login', user);
  console.log('post responce:', data); // develop
  setToken(data.token);
  return data;
};

export const logout = async user => {
  const { data } = await instance.post('/users/logout', user);
  console.log('post response:', data); // develop
  deleteToken();
  return data;
};

export const getCurrentUser = async () => {
  const { data } = await instance.get('/users/current');
  console.log('get response:', data); // develop
  return data;
};
