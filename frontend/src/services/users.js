import axios from 'axios';

const base_url = 'http://localhost:3000/api';

export const getUsers = () => {
  return axios.get(`${base_url}/users`);
};

export const createUser = (user) => {
  return axios.post(`${base_url}/users/create`,user)
};