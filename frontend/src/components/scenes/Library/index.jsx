import React, { useEffect, useState } from "react";
import CardBook from "../../_commons/components/CardBook";
import Searching from "../../_commons/components/Searching";
import { getBooks }  from "../../../services/books.js";
import { filterProjects } from './Logica';
import '../../../styles/Library/index.css';

function Library() {

  const [books, setBooks] = useState({ original: [], filter: [] });

  useEffect(() => {
    getBooks()
      .then(res => {
        console.log("libros ", res.data)
        setBooks({ original: res.data.data, filter: res.data.data });
      })
      .catch(err => console.log("Error al obtener los libros ", err));

    return () => {
      setBooks([]);
    }
  }, []);

  const filterArray = (value) => {
    setBooks(filterProjects(value,books));
  };

  return (
    <div className="Library">
      <div className="container">
        <br />
        <Searching filter={filterArray} />
        <br />
        <div className="columns is-multiline is-mobile">
          { books.filter && books.filter.map((e,i) => <div key={`key${i}`} className="column is-full-mobile is-one-third-tablet is-one-quarter-desktop is-one-quarter-widescreen is-one-quarter-fullhd"> <CardBook key={`key${i}`} book={e} /> </div>) }
        </div>
      </div>
    </div>
  );
}

export default Library;