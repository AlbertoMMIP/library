import axios from 'axios';
import { BASE_URL_API } from "./constants";

export const getInventoriesByBook = (id) => {
  return axios.get(`${BASE_URL_API}/inventories/bybook/${id}`);
};