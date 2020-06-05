import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="card" style={{minWidth:'500px'}} > 
          <div className="card-content">
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com" />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input className="input" type="text" placeholder="**********" />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-fullwidth">
                  <span class="icon">
                    <i class="fas fa-home"></i>
                  </span>
                  <span>L O G I N</span>
                </button>
              </div>
            </div>     
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
