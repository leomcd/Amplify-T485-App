import React from 'react';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { Link } from "react-router-dom";
import { AmplifyS3Image } from "@aws-amplify/ui-react/legacy";
import '@aws-amplify/ui-react/styles.css';

import './css/photos.css';

import StorageCarousel from './Photo-Components/StorageCarousel';

import { Storage } from 'aws-amplify';

function Photos() {
  return (
    <div className="photo-section container-fluid color-scheme-alt">
      <h3 className="section-heading">Photos</h3>
      <br />
      <Authenticator hideSignUp={true}>
        {({ signOut, user }) => (
          <>
            <button onClick={signOut}>Sign out</button>
            <div className="photos">
              <h2 className="section-heading photo-section-heading">Emerald Bay</h2>

              <StorageCarousel target="ebay/" />

              <Link to="ebay" className="btn btn-dark btn-lg">Photo Gallery</Link>
            </div>
          </>
        )}
      </Authenticator>
    </div>
  );
}

export default Photos;
