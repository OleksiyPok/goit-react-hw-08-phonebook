import axios from 'axios';

axios.defaults.baseURL = 'https://64d7bd1f5f9bf5b879cdec40.mockapi.io';
axios.defaults.params = {};

export const getData = async () => {
  const { data } = await axios.get(`/contacts`);
  // console.log('getData_axios:', data); // develop
  return data;
};

export const postData = async newPerson => {
  const { data } = await axios.post(`/contacts`, newPerson);
  // console.log('postData_axios:', data); // develop
  return data;
};

export const deleteData = async person => {
  const { data } = await axios.delete(`/contacts/${person.id}`);
  // console.log('deleteData_axios:', data); // develop
  return data;
};

// -----------------------------------------------------------------------

// const instanceContacts = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
// });

// export const setToken = token => {
//   instanceContacts.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// export const getData = async () => {
//   const { data } = await instanceContacts.get(`/contacts`);
//   console.log('getData:', data); // develop
//   return data;
// };

// export const postData = async newPerson => {
//   const { data } = await instanceContacts.post(`/contacts`, newPerson);
//   console.log('postData:', data); // develop
//   return data;
// };

// export const deleteData = async person => {
//   const { data } = await instanceContacts.delete(`/contacts/${person.id}`);
//   console.log('deleteData:', data); // develop
//   return data;
// };

// export const updateData = async person => {
//   const { data } = await instanceContacts.patch(`/contacts/${person.id}`);
//   console.log('updateData:', data); // develop
//   return data;
// };
