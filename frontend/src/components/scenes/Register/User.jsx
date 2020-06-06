import React, { useState } from "react";

function User() {
  const [warning, ] = useState(false);
  return (
    <div>
      <div className="field">
        <label className="label">Name</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="text" placeholder="Name"  />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          {warning && 
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          }
        </div>
        {warning && <p className="help is-success">Name is available</p>}
      </div>
      <div className="field">
        <label className="label">Middle name</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="text" placeholder="Text input"  />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          {warning && 
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          }
        </div>
        {warning && <p className="help is-success">Middle name is available</p>}
      </div>
      <div className="field">
        <label className="label">Last name</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="text" placeholder="Text input"  />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          {warning && 
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          }
        </div>
        {warning && <p className="help is-success">Last name is available</p>}
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-danger" type="email" placeholder="Email input"  />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          {warning && 
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          }
        </div>
        {warning && <p className="help is-success">Email is available</p>}
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="password" placeholder="Text input"  />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          {warning && 
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          }
        </div>
        {warning && <p className="help is-success">Password is available</p>}
      </div>
      <div className="field">
        <label className="label">Phone</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="text" placeholder="Text input"  />
          <span className="icon is-small is-left">
            <i className="fas fa-phone"></i>
          </span>
          {warning && 
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          }
        </div>
        {warning && <p className="help is-success">Phone is available</p>}
      </div>

      <div className="field">
        <label className="label">Birthday</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="text" placeholder="Text input"  />
          <span className="icon is-small is-left">
            <i className="fas fa-calendar"></i>
          </span>
          {warning && 
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          }
        </div>
        {warning && <p className="help is-success">Date is available</p>}
      </div>
      <div className="field">
        <div className="control">
          <label className="radio">
            <input type="radio" name="sex" />
            Hombre
          </label>
          <label className="radio">
            <input type="radio" name="sex" />
            Mujer
          </label>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input type="checkbox" />
            I agree to the terms and conditions
          </label>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Register</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Login</button>
        </div>
      </div>
    </div>
  );
}

export default User;