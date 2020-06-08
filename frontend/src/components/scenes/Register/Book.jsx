import React, { useState } from "react";
import { useHistory } from "react-router";
import { createBook } from "../../../services/books";


function Book() {
  const [warning, ] = useState(false);
  const [body, setBody] = useState({
    title: "",
    description: "",
    urlimage: "",
    register_date: Date.now(),
    author: "",
    count:1
  });
  const history = useHistory();

  const handleChange = ({ target: {name, value}}) => {
    setBody({
      ...body,
      [name]: value
    })
  }

  const handleRegister = () => {    
    createBook(body)
      .then((b) => {
        history.push('/books');
      })
      .catch(err => console.log("Error al registrar ", err))
  }
  const handleGoBook = () => {
    history.push('/books');
  }
  

  return (
    <div>
    <div className="field">
      <label className="label">Title</label>
      <div className="control has-icons-left has-icons-right">
        <input className="input is-success" type="text" placeholder="Title" name="title" value={body.title} onChange={handleChange}  />
        <span className="icon is-small is-left">
          <i className="fas fa-book"></i>
        </span>
        {warning && 
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        }
      </div>
      {warning && <p className="help is-success">Title is available</p>}
    </div>
    <div className="field">
      <label className="label">Author</label>
      <div className="control has-icons-left has-icons-right">
        <input className="input is-success" type="text" placeholder="Author" name="author" value={body.author} onChange={handleChange}  />
        <span className="icon is-small is-left">
          <i className="fas fa-user"></i>
        </span>
        {warning && 
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        }
      </div>
      {warning && <p className="help is-success">Author is available</p>}
    </div>
    <div className="field">
      <label className="label">Url image</label>
      <div className="control has-icons-left has-icons-right">
        <input className="input is-success" type="text" placeholder="Url image" name="urlimage" value={body.urlimage} onChange={handleChange} />
        <span className="icon is-small is-left">
          <i className="fas fa-image"></i>
        </span>
        {warning && 
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        }
      </div>
      {warning && <p className="help is-success">Url image is available</p>}
    </div>

    <div className="field">
      <label className="label">Count</label>
      <div className="control has-icons-left has-icons-right">
        <input className="input is-danger" type="number" placeholder="Count input" name="count" value={body.count} onChange={handleChange}  />
        <span className="icon is-small is-left">
          <i className="fas fa-hashtag"></i>
        </span>
        {warning && 
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        }
      </div>
      {warning && <p className="help is-success">Count is available</p>}
    </div>
    <div className="field">
      <label className="label">Description</label>
      <div className="control">
        <textarea className="textarea" placeholder="Description" name="description" value={body.description} onChange={handleChange}></textarea>
      </div>
    </div>
    <div className="field is-grouped">
      <div className="control">
        <button className="button is-link" onClick={handleRegister} >Register</button>
      </div>
      <div className="control">
        <button className="button is-link is-light" onClick={handleGoBook} >Cancel</button>
      </div>
    </div>
  </div>
  );
}

export default Book;