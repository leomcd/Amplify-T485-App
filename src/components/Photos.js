import React from 'react';

import { Amplify } from 'aws-amplify';
import { Authenticator, useTheme,Heading, Text } from '@aws-amplify/ui-react';
import {Link} from "react-router-dom";
import { AmplifyS3Image } from "@aws-amplify/ui-react/legacy";
import { useState } from 'react';
import '@aws-amplify/ui-react/styles.css';

import './css/photos.css';

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
              <div id="carouselControls" className="carousel slide" data-ride="false">
                <div className="carousel-inner">
                  <div className="carousel-item active container-fluid">
                    <AmplifyS3Image className="amplify-img-carousel" imgKey="ebay1.HEIC" /><br></br>
                  </div>
                  <div className="carousel-item container-fluid">
                    <AmplifyS3Image className="amplify-img-carousel" imgKey="ebay2.HEIC" /><br></br>
                  </div>
                  <div className="carousel-item container-fluid">
                    <AmplifyS3Image className="amplify-img-carousel" imgKey="ebay3.JPG" /><br></br>
                  </div>
                  <div className="carousel-item container-fluid">
                    <AmplifyS3Image className="amplify-img-carousel" imgKey="ebay4.JPG" /><br></br>
                  </div>
                  <div className="carousel-item container-fluid">
                    <AmplifyS3Image className="amplify-img-carousel" imgKey="ebay5.JPG" /><br></br>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            <Link to="ebay">Photo Gallery</Link>
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
