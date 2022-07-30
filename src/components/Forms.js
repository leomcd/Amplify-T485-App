import React from 'react';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import WithAuth from './generic/WithAuth';

import './css/forms.css';

function Forms() {
  return (
    <div className="photo-section container-fluid color-scheme-alt">
      <h3 className="section-heading">Forms</h3>
      <br />
      <WithAuth from="forms">
        <div className="forms">
          <h2 className="form">Eagle</h2>
        </div>
      </WithAuth>
    </div>
  );
}

export default Forms;
