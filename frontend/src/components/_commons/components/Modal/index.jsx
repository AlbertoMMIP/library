import React, { useState } from 'react';
import { createLoan } from '../../../../services/loans';
import Notification from "../../../_commons/elements/Notification";

function Modal({close, users, title, inventory}) {
  const [body, setBody] = useState({ days_loan: 5, inventory_id: inventory.length > 0 ? inventory[0].id : 0, user_id:users.length > 0 ? users[0].id : 0 });
  const [errorFields, seterrorFields] = useState({
    error: false,
    msgError: "Error"
  });
  const selectOption = (e) => {
    setBody({
      ...body,
      [e.target.name]: e.target.options[e.target.selectedIndex].id
    })
    console.log('click id', e.target.options[e.target.selectedIndex].id);
  }

  const handleOnChange = (e) =>{
    setBody({
      ...body,
      [e.target.name]: e.target.value
    })
  }

  const handleSaveLoan = () =>{
    // console.log("Los datos a guardar son ", body);
    createLoan(body)
      .then(res => {
        seterrorFields({...errorFields, error:true, msgError:"Prestamo creado correctamente"});
        setTimeout(function(){ close(); }, 3000);
      });
  }

  const closeError = () => seterrorFields({...errorFields, error:false});

  return(
    <div className="modal is-active" >
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Loan Book</p>
          <button className="delete" aria-label="close" onClick={close} ></button>
        </header>
        <section className="modal-card-body">
          
          <div className="field">
            <label className="label">Book Enables</label>
            <div className="control is-full">
              <div className="select">
                <select name="inventory_id" onChange={selectOption} >
                  {inventory.length > 0 ? 
                    inventory.map((i) => <option key={i.inventory_code} id={i.id}>{title} - {i.inventory_code}</option>)
                  :
                    <option>There are not enable books of this tititle</option>
                  }
                </select>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column" >
              <div className="field">
                <label className="label">Select user to loan</label>
                <div className="control">
                  <div className="select">
                    <select name="user_id" onChange={selectOption}>
                      {users.length > 0 ? 
                        users.map((u) => <option key={u.id} id={u.id}>{u.name} {u.middle_name} {u.last_name}</option>)
                      :
                        <option>no users</option>
                      }
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="column" >
              <div className="field">
                <label className="label">Days to loan</label>
                <div className="control has-icons-left">
                  <input className="input is-success" type="number" placeholder="Days" onChange={handleOnChange} name="days_loan" value={body.days_loan} />
                  <span className="icon is-small is-left">
                    <i className="fas fa-hashtag"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          {(body.inventory_id !== 0 && body.user_id !== 0) && <button className="button is-success" onClick={handleSaveLoan} >Loan book</button>}
          <button className="button" onClick={close}>Cancel</button>
        </footer>
        {errorFields.error && <Notification  type="is-warning is-full" msg={errorFields.msgError} close={closeError} />}
      </div>
    </div>
  );
}


export default Modal;