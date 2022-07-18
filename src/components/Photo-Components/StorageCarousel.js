import React from 'react';
import * as ReactDOM from 'react-dom';

import { Storage } from 'aws-amplify';
import { AmplifyS3Image } from "@aws-amplify/ui-react/legacy";

class CarouselInner extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createElement('div', {"className":"carousel-inner", "id":"carousel-inner"});
  }

  componentDidMount() {
    Storage.list(this.props.target) // for listing ALL files without prefix, pass '' instead
      .then(result => {
        for (let i = 0; i < result.length; i++) {
          if (result[i].key !== this.props.target) {
            const newDiv = document.createElement("div");
            if (i != 1) {newDiv.className = "carousel-item container-fluid";} else {newDiv.className = "carousel-item container-fluid active";}

            document.getElementById('carousel-inner').appendChild(newDiv);

            ReactDOM.render(
                <AmplifyS3Image className="amplify-img-carousel" imgKey={result[i].key} />, newDiv);
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

class StorageCarousel extends React.Component {
  render() {
    return (
      <>
        <div id="carouselControls" className="carousel slide" data-ride="false">
          <CarouselInner target={this.props.target} />

          <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </>
    );
  }
}

export default StorageCarousel;
