/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function LoansPanel({data}) {
  console.log('data recived', data);
  
  return (
    <div>
      <nav className="panel">
        <p className="panel-heading">
          Books requested
        </p>
        {/* <div className="panel-block">
          <p className="control has-icons-left">
            <input className="input" type="text" placeholder="Search" />
            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div> */}
        {data.length > 0 ? 
          data.map(b => (
            <a className="panel-block" key={b.id}>
              <span className="panel-icon">
                <i className="fas fa-book" aria-hidden="true"></i>
              </span>
              Libro con invetario número {b.inventory_id} prestado por {b.days_loan} días y con estatus {b.status}, solicitado el día {b.start_date}
            </a> 
          ))
          :
          <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          Sin libros prestados
        </a>
        }
      </nav>
    </div>
  );
}

export default LoansPanel;