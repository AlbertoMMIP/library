import React, { useState, useEffect } from "react";
import Table from "../../_commons/components/Table";
import { getUsers }  from "../../../services/users";
// import { filterProjects } from './Logica';
import "../../../styles/index.css";

function Users() {

  const [users, setUsers] = useState({ original: [], filter: [] });

  useEffect(() => {
    getUsers()
      .then(res => {
        console.log("users ", res.data)
        setUsers({ original: res.data.data, filter: res.data.data });
      })
      .catch(err => console.log("Error al obtener los usuarios ", err));

    return () => {
      setUsers([]);
    }
  }, []);

  // const filterArray = (value) => {
  //   setUsers(filterProjects(value,users));
  // };

  return (
    <div className="App">
      <div className="container">
        <br />
        <Table data={users.filter} />
      </div>
    </div>
  );
}

export default Users;