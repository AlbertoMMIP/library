import React, { useState, useEffect } from "react";
import Panel from "../../_commons/components/Panel";

import User from "../Register/User";

function Profile() {
  const [user, setUser] = useState('');

  useEffect(() => {
    let name = localStorage.getItem("name");
    setUser(name)
  },[])

  const [active, setActive] = useState(true);
  return(
    <div>
      <h2 className="title" >Bienvenido {user}</h2>
      <Panel changeTab={setActive} />
      <div className="container" >
        {active ? 
          <User />
        :
          <div>Books loans</div>
        }
      </div>
    </div>
  );
}

export default Profile;