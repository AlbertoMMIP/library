import React from "react";

function Searching() {
  return (
    <div className="control has-icons-left">
      <input className="input is-large" type="search" placeholder="Searching by Author or Title" />
      <span className="icon is-medium is-left">
        <i className="fas fa-book"></i>
      </span>
    </div>
  );
}

export default Searching;