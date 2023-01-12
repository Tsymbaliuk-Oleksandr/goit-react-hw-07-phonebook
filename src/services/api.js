import axios from 'axios';

axios.defaults.baseURL = 'https://63be789ce348cb07620f779a.mockapi.io';

export const fetchContactsApi = async () => {
  const resp = await axios.get('/contacts');
  return resp.data.map(({ id, name, phone }) => ({ id, name, phone }));
};

export const addContactApi = async contact => {
  const resp = await axios.post('/contacts', contact);
  return { ...contact, id: resp.data.id };
};

export const removeContactApi = id => {
  return axios.delete(`/contacts/${id}`);
};
