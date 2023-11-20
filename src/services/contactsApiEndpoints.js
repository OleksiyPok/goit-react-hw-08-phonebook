import { instance } from './apiConfig';

export const getData = async () => {
  const { data } = await instance.get(`/contacts`);
  // console.log('getData:', data); // develop
  return data;
};

export const postData = async newPerson => {
  // console.log('postData newPerson:', newPerson);
  const { data } = await instance.post(`/contacts`, newPerson);
  // console.log('postData:', data); // develop
  return data;
};

export const patchData = async person => {
  // console.log('patchData person:', person);
  const { data } = await instance.patch(`/contacts/${person.id}`, {
    name: person.name,
    number: person.number,
  });
  // console.log('patchData:', data); // develop
  return data;
};

export const deleteData = async person => {
  const { data } = await instance.delete(`/contacts/${person.id}`);
  // console.log('deleteData:', data); // develop
  return data;
};
