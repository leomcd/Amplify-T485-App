import React from 'react';
import { Link } from "react-router-dom";

import './css/navbar.css';

import { Auth } from 'aws-amplify';

class SignInOut extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "signedout": true
    };
  }

  componentDidMount() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        this.setState({
          "signedout": false
        });
      })
      .catch(err => {
        this.state = {
          "signedout": true
        };
      });
  }

  render() {
    if (this.state.signedout) {
      return (
        <Link to="signin" className="nav-link">Sign In</Link>
      );
    } else {
      return (
        <a className="nav-link" href="#" onClick={() => {
          Auth.signOut().then(() => {
            window.location.href = "/";
          });
        }}>Sign out</a>
      );
    }
  }
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/">Scouts Troop 485</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Contacts
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="https://www.facebook.com/pg/Troop485/about/" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a className="dropdown-item" href="mailto:boyscouts485@gmail.com">Mail</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" target="_blank" rel="noreferrer" href="https://docs.google.com/forms/d/1pGRtCcQcu5Ur30JJIome3ddnbXSZjjsOUscb8tYL-rc/">Request Access</a></li>
            </ul>
          </li>
          <li className="d-flex nav-item">
            <Link className="nav-link" to="photos">Photos</Link>
          </li>
          <li className="d-flex nav-item">
            <Link className="nav-link" to="calendar">Calendar</Link>
          </li>
          <li className="d-flex nav-item">
            <Link className="nav-link" to="forms">Forms</Link>
          </li>
          <li className="d-flex nav-item">
            <Link className="nav-link" to="latestevents">Events</Link>
          </li>
          <li className="d-flex nav-item">
            <SignInOut />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
