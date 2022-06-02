import React from 'react';
import {Link} from "react-router-dom";

import './css/navbar.css';

function App() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/">Scouts BSA Troop 485, Westlake Village, CA</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Contacts
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item nav-item" href="https://www.facebook.com/pg/Troop485/about/">Facebook</a>
              <a className="dropdown-item nav-item" href="mailto:boyscouts485@gmail.com">Mail</a>
              <a className="dropdown-item nav-item" href="https://docs.google.com/forms/d/1pGRtCcQcu5Ur30JJIome3ddnbXSZjjsOUscb8tYL-rc/">Request Access</a>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="photos">Photos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App;
/*
<li className="nav-item">
  <Link className="nav-link" to="events">Events</Link>
</li>
*/
