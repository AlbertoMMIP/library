import React, { useState } from "react";
import Panel from "../../_commons/components/Panel";

import User from "../Register/User";

function Profile() {
  const [active, setActive] = useState(true);
  return(
    <div>
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