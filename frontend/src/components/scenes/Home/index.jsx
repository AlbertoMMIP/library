import React, { useState, useContext }  from 'react';
import { useHistory } from 'react-router';
import { GlobalContext } from "../../../context";
import '../../../styles/Home/index.css';

function Home() {
  const [formFields, setformFields] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const history = useHistory();
  const [, dispatch] = useContext(GlobalContext);

  const handleInputChange = ({ target: { name, value } }) => {
    setformFields({
      ...formFields,
      [name]: value
    });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    formFields._id = formFields.email;
    formFields.rol = formFields.email;
    const user = formFields;
    dispatch({ type: "LOGIN", payload: user });
    history.push('/secret');
  };
  return (
    <div className="App">
      <div className="App-header">
        <div className="card" style={{minWidth:'500px'}} > 
          <div className="card-content">
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" 
                  value={formFields.username}
                  onChange={handleInputChange} 
                  type="email" 
                  name="email"
                  placeholder="e.g. alexsmith@gmail.com" />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" type="text" placeholder="**********" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-fullwidth" onClick={(e) => handleSubmit(e)} >
                  <span className="icon">
                    <i className="fas fa-home"></i>
                  </span>
                  <span>L O G I N</span>
                </button>
              </div>
            </div>     
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
