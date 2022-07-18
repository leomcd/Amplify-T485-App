import React from 'react';
import * as ReactDOM from 'react-dom';

import { Storage } from 'aws-amplify';
import { AmplifyS3Image } from "@aws-amplify/ui-react/legacy";

class StorageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createElement('div', {"className":"gallery", "id":"gallery"});
  }

  componentDidMount() {
    Storage.list(this.props.target) // for listing ALL files without prefix, pass '' instead
      .then(result => {
        const gallery = document.getElementById("gallery");

        for (let i = 0; i < result.length; i++) {
          if (result[i].key !== this.props.target) {
            const newDiv = document.createElement("div");
            newDiv.className = "gallery-item container-fluid";

            document.getElementById('gallery').appendChild(newDiv);

            ReactDOM.render(
                <AmplifyS3Image className="amplify-img-gallery" imgKey={result[i].key} />, newDiv);
          };
        }
      }
    )
    .catch(err => console.log(err));
  }

  render() {
    return this.container;
  }
}

export default StorageGallery;
