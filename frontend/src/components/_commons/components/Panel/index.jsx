/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

function Panel({changeTab}) {
  const [active, setActive] = useState({info:"is-active", books: ""})

  const handleActive = (e) => {
    switch (e) {
      case undefined:
        setActive({info: "is-active" , books:""});
        changeTab(true);
        break;
      case 'I':
        setActive({info: "is-active" , books:""});
        changeTab(true);
        break;
      case 'B':
        setActive({info:"", books:"is-active"});
        changeTab(false);
        break;
      default:
        break;
    }
  }

  return (
    <div className="tabs is-centered is-boxed is-medium" style={{paddingTop:'50px'}}>
      <ul>
        <li className={active.info} onClick={(e) => handleActive('I')} >
          <a>
            <span className="icon is-small">
              <i className="fas fa-user" aria-hidden="true"></i>
            </span>
            <span >Personal Info</span>
          </a>
        </li>
        <li className={active.books} onClick={(e) => handleActive('B')} >
          <a>
            <span className="icon is-small">
              <i className="fas fa-book" aria-hidden="true"></i>
            </span>
            <span>Books loans</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Panel;
