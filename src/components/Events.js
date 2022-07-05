import React from 'react';

import ICAL from 'ical.js';

import { Amplify } from 'aws-amplify';
import { Authenticator,useTheme,Heading, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import './css/events.css';

import ics from './troopcalendar';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

function Calendar() {
  var data = ICAL.parse(ics);



  console.log(data);

  console.log(data.getFirstSubcomponent("vevent"));

  return ics;
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
