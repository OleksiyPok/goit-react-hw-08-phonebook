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

export const signUp = async newUser => {
  return await instanceAuth.post('/users/signup', newUser);
};

export const login = async user => {
  const { data } = await instanceAuth.post('/users/login', user);
  // console.log('login data:', data);
  setToken(data.token);
  return data;
};

export const logout = async user => {
  const { data } = await instanceAuth.post('/users/logout', user);
  // console.log('logout data:', data);
  deleteToken();
  return data;
};

export const getProfile = async () => {
  const { data } = await instanceAuth.get('/users/current');
  // console.log('getProfile data:', data);
  return data;
};
