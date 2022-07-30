import React from 'react';

import { Navigate } from 'react-router-dom';

import { Authenticator } from '@aws-amplify/ui-react';

import './css/signin.css';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    const queryParams = new URLSearchParams(window.location.search);
    let to = queryParams.get("to");
    if (to === null || to === "signin" || to === "signin/") {to = "";}

    let reload = queryParams.get("reload");
    this.state = {"to": "/" + to, "reload": reload};
  }

  render() {
    return (
      <div className="container-fluid photo-section color-scheme-alt">
        <h3 className="section-heading">Sign in</h3>
        <Authenticator hideSignUp={true}>
          {({ signOut, user }) => {
            if (this.state.reload !== false) window.location.assign(this.state.to);
            else return (<Navigate to={this.state.to} />);
          }}
        </Authenticator>
      </div>
    );
  }
}

export default SignIn;
