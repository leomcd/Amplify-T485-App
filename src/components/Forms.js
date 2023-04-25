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
      <WithAuth from="forms">
        <div className="forms">
          <div className="form">
            <h2 className="form-name">Eagle Scout Service Project Workbook</h2>
            <a className="btn btn-dark form-link" target="_blank" rel="noreferrer" href="https://www.scouting.org/programs/scouts-bsa/advancement-and-awards/eagle-scout-workbook/">Link</a>
          </div>
          <div className="form">
            <h2 className="form-name">Eagle Scout Service Project Workbook</h2>
            <a className="btn btn-dark form-link" target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1_2wIO2ho_GV3n4UlGEwFr03wz0-5wac-Knk_RBkBLS0/edit?usp=sharing">Link</a>
          </div>
        </div>
      </WithAuth>
    </div>
  );
}

export default Forms;
