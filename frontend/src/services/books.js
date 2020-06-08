import axios from 'axios';
import { BASE_URL_API } from "./constants";

export const getBooks = () => {
  return axios.get(`${BASE_URL_API}/books`);
};

export const createBook = (book) => {
  return axios.post(`${BASE_URL_API}/books/create`,book)
};