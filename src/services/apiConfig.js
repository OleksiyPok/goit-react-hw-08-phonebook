import axios from 'axios';

export const publicInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const privatInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  privatInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const deleteToken = () => {
  privatInstance.defaults.headers.common.Authorization = '';
};
