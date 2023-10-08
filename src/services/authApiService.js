import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// axios.defaults.params = {};

// const BASE_URL = 'https://connections-api.herokuapp.com';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const signUp = async newUser => {
  console.log(newUser);
  return await instance.post('/users/signup', newUser);
};

export const login = async user => {
  return await instance.post('/users/login', user);
};

export const getProfile = async user => {
  const data = await instance.get('/users/current', user);
  return data;
};
