import React from 'react';

import { Amplify } from 'aws-amplify';
import { Authenticator,useTheme,Heading, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import './css/events.css';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

function Events() {
  return (
    <div className="container-fluid photo-section color-scheme-alt">
      <h3 className="section-heading">Events</h3>
      <Authenticator hideSignUp={true}>
        {({ signOut, user }) => (
          <>
            <button onClick={signOut}>Sign out</button>
            <div className="events">
            <br />
              <iframe src="https://scoutbook.scouting.org/?Redir=%2Fmobile%2Fdashboard%2Fcalendar" className="events-iframe" frameBorder="0" />
            </div>
          </>
        )}
      </Authenticator>
    </div>
  );
}

export default Events;
