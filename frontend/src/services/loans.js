import axios from 'axios';
import { BASE_URL_API } from "./constants";

export const createLoan = (body) => {
  return axios.post(`${BASE_URL_API}/loans/create`,body)
};

export const getLoans = (id_user) => {
  return axios.get(`${BASE_URL_API}/loans/byUser/${id_user}`)
};
