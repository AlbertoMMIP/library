import React from "react";
import Table from "../../_commons/components/Table";
// import { getBooks }  from "../../../services/users.js";
// import { filterProjects } from './Logica';
import '../../../styles/Library/index.css';

function User() {

  // const [users, setUsers] = useState({ original: [], filter: [] });

  // useEffect(() => {
  //   getBooks()
  //     .then(res => {
  //       console.log("libros ", res.data)
  //       setUsers({ original: res.data.data, filter: res.data.data });
  //     })
  //     .catch(err => console.log("Error al obtener los libros ", err));

  //   return () => {
  //     setUsers([]);
  //   }
  // }, []);

  // const filterArray = (value) => {
  //   setUsers(filterProjects(value,users));
  // };

  return (
    <div className="Library">
      <div className="container">
        <br />
        <Table />
      </div>
    </div>
  );
}

export default User;