import axios from 'axios';
import { BASE_URL_API } from "./constants";

export const getBooks = () => {
  return axios.get(`${BASE_URL_API}/books`);
};