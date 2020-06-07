import axios from 'axios';

const base_url = 'http://localhost:3000/api';

export const login = async (auth, history, dispatch) => {
  let response = "";
  await axios.post(`${base_url}/auth/login`,auth)
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
  return axios.get(`${base_url}/users`);
};

export const createUser = (user) => {
  return axios.post(`${base_url}/users/create`,user)
};