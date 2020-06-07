import axios from 'axios';

const base_url = 'http://localhost:3000/api';

export const login = async (auth, history) => {
  let response = "";
  await axios.post(`${base_url}/auth/login`,auth)
          .then(res => {
            console.log("id", res);
            localStorage.setItem(("id"),JSON.stringify(res.data.id));
            localStorage.setItem(("name"),JSON.stringify(res.data.name));
            localStorage.setItem(("rol"),JSON.stringify(res.data.rol));
            history.push("/books");
          })
          .catch(err => {
              response = err.response.data.msg || '';
          })
  return response;
};

export const getUsers = () => {
  return axios.get(`${base_url}/users`);
};

export const createUser = (user) => {
  return axios.post(`${base_url}/users/create`,user)
};