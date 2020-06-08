import axios from 'axios';
import { BASE_URL_API } from "./constants";

export const login = async (auth, history, dispatch, setformFields, formFields) => {
  await axios.post(`${BASE_URL_API}/auth/login`,auth)
          .then(res => {
            console.log("id", res);
            localStorage.setItem(("id"),JSON.stringify(res.data.id));
            localStorage.setItem(("data"),JSON.stringify(res.data));
            localStorage.setItem(("rol"),res.data.rol);
            dispatch({ type: "LOGIN", payload: res.data });
            history.push("/profile");
          })
          .catch(err => {
              const response = (err.response && err.response.data && err.response.data.msg) || '';
              setformFields({ ...formFields, error:true, msgError:response})
          })
};

export const getUsers = () => {
  return axios.get(`${BASE_URL_API}/users`);
};

export const createUser = (user) => {
  return axios.post(`${BASE_URL_API}/users/create`,user)
};