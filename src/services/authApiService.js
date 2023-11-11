import axios from 'axios';

const instanceAuth = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instanceAuth.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const deleteToken = () => {
  instanceAuth.defaults.headers.common.Authorization = ``;
};

export const registration = async newUser => {
  const { data } = await instanceAuth.post('/users/signup', newUser);
  console.log('registration data:', data); // develop
  return data;
};

export const login = async user => {
  const { data } = await instanceAuth.post('/users/login', user);
  console.log('login data:', data); // develop
  setToken(data.token);
  return data;
};

export const logout = async user => {
  const { data } = await instanceAuth.post('/users/logout', user);
  // console.log('logout data:', data); // develop
  deleteToken();
  return data;
};

export const getCurrent = async () => {
  const { data } = await instanceAuth.get('/users/current');
  console.log('getCurrent data:', data); // develop
  return data;
};
