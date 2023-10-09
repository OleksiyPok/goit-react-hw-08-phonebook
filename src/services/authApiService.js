import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// axios.defaults.params = {};

// const BASE_URL = 'https://connections-api.herokuapp.com';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  instance.defaults.headers.common['Authorization'] = token;
};

export const deleteToken = () => {
  delete instance.defaults.headers.common['Authorization'];
};

export const signUp = async newUser => {
  return await instance.post('/users/signup', newUser);
};

export const login = async user => {
  const { data } = await instance.post('/users/login', user);
  setToken(`Bearer${data.token}`);
  return data;
};

export const logout = async user => {
  const { data } = await instance.post('/users/logout', user);
  deleteToken();
  return data;
};

export const getProfile = async () => {
  const { data } = await instance.get('/users/current');
  console.log('data:', data);
  return data;
};
