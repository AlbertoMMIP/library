import React, { useEffect, useState } from "react";
import CardBook from "../../_commons/components/CardBook";
import Searching from "../../_commons/components/Searching";
import { getBooks }  from "../../../services/books.js";
import { filterProjects } from './Logica';
import { getUsers }  from "../../../services/users";
import "../../../styles/index.css";

function Library() {
  const [books, setBooks] = useState({ original: [], filter: [] });
  const [rol, setRol] = useState('U');
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getBooks()
      .then(res => {
        setBooks({ original: res.data.data, filter: res.data.data });
      })
      .catch(err => console.log("Error al obtener los libros ", err));

      let rol = localStorage.getItem("rol");
      if (rol) rol = rol.replace('"','').replace('"','');
      setRol(rol);

      if(rol !== 'U'){
        getUsers()
        .then(res => {
          setUsers(res.data.data);
        })
        .catch(err => console.log("Error al obtener los usuarios ", err));
      }

    return () => {
      setBooks([]);
      setRol('U');
      setUsers([]);
    }
  }, []);

  const filterArray = (value) => {
    setBooks(filterProjects(value,books));
  };

  const isAdmin = (rol === 'A' || rol === 'SA') && true;

  return (
    <div className="App">
      <div className="container">
        <br />
        <Searching filter={filterArray} />
        <br />
        {isAdmin && <a className="button is-link is-fullwidth" href="/registerBook" style={{ marginBottom:'30px'}} >Add New Book</a>}
        <div className="columns is-multiline is-mobile">
          { books.filter && books.filter.map((e,i) => <div key={`key${i}`} className="column is-full-mobile is-one-third-tablet is-one-quarter-desktop is-one-quarter-widescreen is-one-quarter-fullhd"> <CardBook key={`key${i}`} book={e} rol={isAdmin} users={users} /> </div>) }
        </div>
      </div>
    </div>
  );
}

export default Library;