import React from "react";
import User from "./User";
import Book from "./Book";
import "../Library/styles/index.css";


function Register({type}) {
  const register = type === 'user' ? <User /> : <Book />
  return (
    <div className="Home">
      <div className="container"> 
        <nav className="panel is-primary">
        <p className="panel-heading">Register {type}</p>
        <div className="panel-block Panel">{register}</div>
      </nav>
      </div>
    </div>
  );
}

export default Register;