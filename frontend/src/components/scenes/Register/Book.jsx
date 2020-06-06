import React, { useState } from "react";

function Book() {
  const [warning, ] = useState(false);
  return (
    <div>
    <div className="field">
      <label className="label">Title</label>
      <div className="control has-icons-left has-icons-right">
        <input className="input is-success" type="text" placeholder="Title"  />
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
        <input className="input is-success" type="text" placeholder="Author"  />
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
        <input className="input is-success" type="text" placeholder="Url image"  />
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
        <input className="input is-danger" type="text" placeholder="Count input"  />
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
        <textarea className="textarea" placeholder="Description"></textarea>
      </div>
    </div>
    <div className="field is-grouped">
      <div className="control">
        <button className="button is-link">Register</button>
      </div>
      <div className="control">
        <button className="button is-link is-light">Cancel</button>
      </div>
    </div>
  </div>
  );
}

export default Book;