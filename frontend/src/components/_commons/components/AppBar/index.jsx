import React from "react";

function AppBar() {
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
            <a className="navbar-item"  href="/secret" >
              Home
            </a>

            <a className="navbar-item"  href="/secret" >
              Documentation
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary"  href="/secret" >
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light"  href="/secret" >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AppBar;