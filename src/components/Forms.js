import React from 'react';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import './css/forms.css';

function Photos() {
  return (
    <div className="photo-section container-fluid color-scheme-alt">
      <h3 className="section-heading">Photos</h3>
      <br />
      <Authenticator hideSignUp={true}>
        {({ signOut, user }) => (
          <>
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
