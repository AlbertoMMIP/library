import React from "react";

function Notification({msg, type, close}) {
  const classs = `notification ${type}`;
  return (
    <div className={classs} >
      <button className="delete" onClick={close} ></button>
      {msg}
    </div>
  );
}

export default Notification;