import React from 'react';

import { Amplify } from 'aws-amplify';
import { Authenticator,useTheme,Heading, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import './css/events.css';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

const calurl = "https://scoutbook.scouting.org/ics/100407.E0A04.ics"

function Calendar() {
  const loading = getElementById("loading");
  var icsText;
  
  fetch(calurl).then(function(response) {
    response.text.then(function(text) {
      icsText = text;
    });
  });
  
  return icsText;
}

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
              <p id="loading">Loading calendar...</p>
              <br />
              <p>{Calendar()}</p>
            </div>
          </>
        )}
      </Authenticator>
    </div>
  );
}

export default Events;
