import React from 'react';

import { Amplify } from 'aws-amplify';
import { Authenticator,useTheme,Heading, Text } from '@aws-amplify/ui-react';
import { useState } from 'react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
import { Storage } from 'aws-amplify';
Amplify.configure(awsExports);

function Photos() {
  let state = { fileUrl: '', file: '', filename: '' }
  let handleChange = e => {
    const file = e.target.files[0]
    state = {
      fileUrl: URL.createObjectURL(file),
      file,
      filename: file.name
    }
  }

  let saveFile = () => {
    Storage.put(state.filename,state.file)
      .then(() => {
        console.log('saved');
        state = {fileUrl:'',file:'',filename:''}
      })
      .catch(err => {
        console.log('error: ', err)
      })
  }
  
  async function getFirstFile() {
    let files = Storage.list('')
    let firstUrl = await Storage.get(files[0].key)
    return firstUrl
  }
  // get the signed URL string
  const signedURL = getFirstFile(); // get key from Storage.list

  return (
    <div className="container-fluid photo-section color-scheme-alt">
      <h3 className="section-heading">Photos</h3>
      <br />
      <Authenticator hideSignUp={true}>
        {({ signOut, user }) => (
          <>
            <button onClick={signOut}>Sign out</button>
            <div className="photos">
              <h3 className="section-heading">Test image:</h3>
              <img src={signedURL} />
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
