import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const deleteToken = () => {
  instance.defaults.headers.common.Authorization = ``;
};

export const signUp = async newUser => {
  return await instance.post('/users/signup', newUser);
};

export const login = async user => {
  const { data } = await instance.post('/users/login', user);
  // console.log('login data:', data);
  setToken(data.token);
  return data;
};

export const logout = async user => {
  const { data } = await instance.post('/users/logout', user);
  // console.log('logout data:', data);
  deleteToken();
  return data;
};

export const getProfile = async () => {
  const { data } = await instance.get('/users/current');
  // console.log('getProfile data:', data);
  return data;
};
