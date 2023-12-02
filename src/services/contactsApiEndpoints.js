import { privatInstance } from './apiConfig';

export const getData = async () => {
  const { data } = await privatInstance.get(`/contacts`);
  return data;
};

export const postData = async newPerson => {
  const { data } = await privatInstance.post(`/contacts`, newPerson);
  return data;
};

export const patchData = async person => {
  const { data } = await privatInstance.patch(`/contacts/${person.id}`, {
    name: person.name,
    number: person.number,
  });
  return data;
};

export const deleteData = async person => {
  const { data } = await privatInstance.delete(`/contacts/${person.id}`);
  return data;
};
