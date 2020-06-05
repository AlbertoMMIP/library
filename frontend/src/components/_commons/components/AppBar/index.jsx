import React, { useContext }  from "react";
import { GlobalContext } from "../../../../context";
import * as menu from './constants';

function AppBar() {
  const [user] = useContext(GlobalContext);
  console.log('user => ', user);
  let opciones = [];
  switch (user.rol) {
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
  
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/secret" >
            BookStore by Alberto
          </a>

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
              { opciones.end.map((o) => <a key={o.title} className="button is-primary" href={o.href}>{o.title}</a>) }
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AppBar;