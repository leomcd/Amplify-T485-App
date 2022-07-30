import React from 'react';

import { Authenticator } from '@aws-amplify/ui-react';

import { Navigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

class WithAuth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {"authenticated": null};
  }
  componentDidMount() {
    Auth.currentAuthenticatedUser().then(() => {
      this.setState({"authenticated": true});
    }).catch(() => {
      this.setState({"authenticated": false});
    })
  }
  render() {
    if (this.state.authenticated === false) {
      return (
        <Navigate to={"/signin/?to=" + this.props.from} />
      );
    } else if (this.state.authenticated == true) {
      return this.props.children;
    } else {
      return (<></>)
    }
  }
}

//<Authenticator hideSignUp={true}>
//  {({ signOut, user }) => this.props.children}
//</Authenticator>

export default WithAuth;
