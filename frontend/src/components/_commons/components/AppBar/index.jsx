import React, { useEffect, useState, useContext }  from "react";
import * as menu from './constants';
import { GlobalContext } from "../../../../context";

function AppBar() {
  const [opciones, setOptions] = useState(menu.opciones);
  const [user] = useContext(GlobalContext);



  //if (user) chooseMenu();
  
  useEffect(() => {
    const chooseMenu = () => {
      console.log("user", user);
      let rol = user.user.rol ? user.user.rol : localStorage.getItem("rol");
      console.log("rol", rol);
      if (rol) rol = rol.replace('"','').replace('"','');
      
      let opciones = [];
      switch (rol) {
        case undefined:
          opciones = menu.opciones;
          break;
        case menu.rol.SUPERADMIN:
        case menu.rol.ADMIN:
          opciones = menu.opcionesAdmin;
          break;
        case menu.rol.USUARIO:
          opciones = menu.opcionesUser;
          break;
        default:
          opciones = menu.opciones;
          break;
      };
      setOptions(opciones);
    }
    
    chooseMenu();
  },[user]);

  


  
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand" style={{marginBottom:'-22px'}}>
          <span className="title is-5 navbar-item" >
            BookStore by Alberto
          </span>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"  href="/secret" >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            { opciones.start.map((o) => <a key={o.title} className="navbar-item"  href={o.href}>{o.title}</a>) }
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
              { opciones.end.map((o) => <a key={o.title} className="button is-primary" href={o.href} onClick={o.out && o.out}>{o.title}</a>) }
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AppBar;