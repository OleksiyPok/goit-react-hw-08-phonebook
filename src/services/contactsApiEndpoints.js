import { instance } from './apiConfig';

export const getData = async () => {
  const { data } = await instance.get(`/contacts`);
  // console.log('getData:', data); // develop
  return data;
};

export const postData = async newPerson => {
  const { data } = await instance.post(`/contacts`, newPerson);
  // console.log('postData:', data); // develop
  return data;
};

export const deleteData = async person => {
  const { data } = await instance.delete(`/contacts/${person.id}`);
  // console.log('deleteData:', data); // develop
  return data;
};

export const updateData = async person => {
  const { data } = await instance.patch(`/contacts/${person.id}`);
  // console.log('updateData:', data); // develop
  return data;
};
