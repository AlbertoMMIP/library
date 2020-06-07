import axios from 'axios';
import { BASE_URL_API } from "./constants";

export const login = async (auth, history, dispatch) => {
  let response = "";
  await axios.post(`${BASE_URL_API}/auth/login`,auth)
          .then(res => {
            console.log("id", res);
            localStorage.setItem(("id"),JSON.stringify(res.data.id));
            localStorage.setItem(("name"),JSON.stringify(res.data.name));
            localStorage.setItem(("rol"),JSON.stringify(res.data.rol));
            dispatch({ type: "LOGIN", payload: res.data });
            history.push("/profile");
          })
          .catch(err => {
              response = err.response.data.msg || '';
          })
  return response;
};

export const getUsers = () => {
  return axios.get(`${BASE_URL_API}/users`);
};

export const createUser = (user) => {
  return axios.post(`${BASE_URL_API}/users/create`,user)
};