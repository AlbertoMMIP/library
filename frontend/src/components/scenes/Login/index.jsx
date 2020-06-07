import React, { useState } from "react";
import { useHistory } from 'react-router';
import { login } from '../../../services/users.js';
import Notification from "../../_commons/elements/Notification";
import { validaFormulario } from '../../../utils/validations';
import "./styles/index.css";

function Home() {
  const history = useHistory();
  const [formFields, setformFields] = useState({
    email: "",
    password: "",
    error: false,
    msgError: "Error"
  });

  const closeError = () => setformFields({...formFields, error:false});
  const handleInputChange = ({ target: { name, value } }) => {
    setformFields({
      ...formFields,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let valida = validaFormulario(formFields);
    console.log("valida", valida);
    
    if (!valida) {
      login(formFields, history)
      .then(res => {
        if(res) setformFields({...formFields, error:true, msgError:res})
      })
    }else {
      setformFields({...formFields, error:true, msgError:valida})
    }
  };

  const enabledButton = (formFields.email.length > 1 && formFields.password.length > 1) ? false : true;

  return (
    <div className="Home">
      <div className="container">
        <nav className="panel is-primary">
          <p className="panel-heading">LOGIN</p>
          <div className="panel-block Panel">
            <div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    value={formFields.email}
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    placeholder="e.g. alexsmith@gmail.com"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="**********"
                    name="password"
                    value={formFields.password}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button
                    className="button is-fullwidth" disabled={enabledButton}
                    onClick={(e) => handleSubmit(e)}
                  >
                    <span>Go</span>
                    <span className="icon">
                      <i className="fas fa-book"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <br />
            {formFields.error && <Notification  type="is-warning is-full" msg={formFields.msgError} close={closeError} />}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Home;
