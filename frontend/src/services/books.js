import axios from 'axios';

const base_url = 'http://localhost:3000/api';

export const getBooks = () => {
  return axios.get(`${base_url}/books`);
};