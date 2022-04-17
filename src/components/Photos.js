import React from 'react';

import { Amplify } from 'aws-amplify';
import { Authenticator, useTheme,Heading, Text } from '@aws-amplify/ui-react';
import { AmplifyS3Image } from "@aws-amplify/ui-react/legacy";
import { useState } from 'react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
import { Storage } from 'aws-amplify';
Amplify.configure(awsExports);

function Photos() {
  return (
    <div className="container-fluid photo-section color-scheme-alt">
      <h3 className="section-heading">Photos</h3>
      <br />
      <Authenticator hideSignUp={true}>
        {({ signOut, user }) => (
          <>
            <button onClick={signOut}>Sign out</button>
            <div className="photos">
              <h2 className="section-heading">Emerald Bay</h2>
              <AmplifyS3Image imgKey="ebay1.HEIC" />
              <AmplifyS3Image imgKey="ebay2.HEIC" />
              <AmplifyS3Image imgKey="ebay3.JPG" />
              <AmplifyS3Image imgKey="ebay4.JPG" />
              <AmplifyS3Image imgKey="ebay5.JPG" />
            </div>
          </>
        )}
      </Authenticator>
    </div>
  );
}

export default Photos;

/*
const formFields = {
  confirmVerifyUser: {
    confirmation_code: {
      labelHidden: false,
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};

const components = {
  VerifyUser: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },

  ConfirmVerifyUser: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};
*/
