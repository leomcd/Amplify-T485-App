import React from 'react';

import { Link } from "react-router-dom";

import './css/photos.css';

import WithAuth from './generic/WithAuth';

import StorageCarousel from './Photo-Components/StorageCarousel';

function Photos() {
  return (
    <div className="photo-section container-fluid color-scheme-alt">
      <h3 className="section-heading">Photos</h3>
      <WithAuth from="photos">
        <div className="photos">
          <h2 className="section-heading photo-section-heading">Emerald Bay</h2>

          <StorageCarousel target="ebay/" />

          <Link to="ebay" className="btn btn-dark btn-lg">Photo Gallery</Link>
        </div>
      </WithAuth>
    </div>
  );
}

export default Photos;
