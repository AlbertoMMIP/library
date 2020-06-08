import React, { useState, useEffect } from "react";
import Panel from "../../_commons/components/Panel";
import ProfileView from "../../_commons/components/Profile";
import LoansPanel from "../../_commons/components/LoansPanel";

function Profile() {
  const [data, setUser] = useState({});
  const [active, setActive] = useState(true);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data"));
    setUser(data)
  },[])

  return(
    <div>
      <h2 className="title" >Bienvenido {data.name}</h2>
      <Panel changeTab={setActive} rol={ data.rol} />
      <div className="container" >
        {active ? 
          <ProfileView data={data} />
        :
         <LoansPanel />
        }
      </div>
    </div>
  );
}

export default Profile;