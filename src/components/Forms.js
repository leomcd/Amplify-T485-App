import React from 'react';

import { Amplify } from 'aws-amplify';
import { Authenticator, useTheme,Heading, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import './css/forms.css';

import awsExports from '../aws-exports';
import { Storage } from 'aws-amplify';
Amplify.configure(awsExports);

function Photos() {
  return (
    <div className="photo-section container-fluid color-scheme-alt">
      <h3 className="section-heading">Photos</h3>
      <br />
      <Authenticator hideSignUp={true}>
        {({ signOut, user }) => (
          <>
            <button onClick={signOut}>Sign out</button>
            <div className="forms">
              <h2 className="form">Eagle </h2>
            </div>
          </>
        )}
      </Authenticator>
    </div>
  );
}

export default Photos;
