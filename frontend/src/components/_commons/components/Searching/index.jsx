import React from "react";

function Searching({filter}) {
  const handleInputChange = (event) => {
    event.persist();
    filter(event.target.value);
  };

  return (
    <div className="control has-icons-left">
      <input className="input is-large" 
        type="search" 
        placeholder="Searching by Author or Title"
        onChange={handleInputChange} />
      <span className="icon is-medium is-left">
        <i className="fas fa-book"></i>
      </span>
    </div>
  );
}

export default Searching;