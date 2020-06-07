import axios from 'axios';
import { BASE_URL_API } from "./constants";

export const createLoan = (body) => {
  return axios.post(`${BASE_URL_API}/loans/create`,body)
};