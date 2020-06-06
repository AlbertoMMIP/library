import React, { useState } from "react";
import { registerUser } from "./Logica";
import { useHistory } from "react-router";

function User() {
  const [warning, ] = useState(false);
  const history = useHistory();
  const [form, setForm] = useState({
    name: "",
    middle_name: "",
    last_name: "",
    sex: "",
    age: "",
    cell_phone: "",
    email: "",
    password: "",
    rol: "U"
  });

  const handleChange = ({ target: {name, value}}) => {
    setForm({
      ...form,
      [name]: value
    })
  }
  const handleSex = ({ target}) => {
    setForm({
      ...form,
      sex: target.id
    })
  }
  const handleRegister = () => {
    registerUser(form)
      .then((u) => {
        history.push('/login');
      })
      .catch(err => console.log("Error al registrar ", err))
  }
  

  return (
    <div>
      <div className="field">
        <label className="label">Name</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
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
          <input className="input is-success" type="text" name="middle_name" placeholder="Middle name" value={form.middle_name} onChange={handleChange} />
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
          <input className="input is-success" type="text" name="last_name" placeholder="Last name" value={form.last_name} onChange={handleChange} />
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
          <input className="input is-danger" type="email" name="email" placeholder="Email input" value={form.email} onChange={handleChange} />
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
          <input className="input is-success" type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
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
          <input className="input is-success" type="number" name="cell_phone" placeholder="phone" value={form.cell_phone} onChange={handleChange} />
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
        <label className="label">Age</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="text" name="age" placeholder="Text input" value={form.age} onChange={handleChange} />
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
            <input type="radio" name="sex" id='H' value={form.sex}  onChange={handleSex} />
            Hombre
          </label>
          <label className="radio">
            <input type="radio" name="sex" id='M' value={form.sex}  onChange={handleSex} />
            Mujer
          </label>
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" onClick={handleRegister} >Register</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Login</button>
        </div>
      </div>
    </div>
  );
}

export default User;