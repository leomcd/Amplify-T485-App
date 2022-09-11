import React from 'react';

import './css/latestevents.css';

function LatestEvents() {
  return (
    <div className="photo-section container-fluid color-scheme-alt">
      <h3 className="section-heading">Latest Events</h3>
        <div className="latestevents">
          <div className="latestevent">
            <h2 className="latestevent-title">Deep Sea Fishing</h2>
            <h3 className="latestevent-subtitle">Catalina Island, August 21, 2022</h3>
            <img src="images/latestevents/rocketlaunch.png" />
            <p className="latestevent-description">Troop 485 went on a daytrip on a boat with Ventura Sportfishing. There was good fishing in the waters around Catalina Island, with each scout having a good catch.</p>
          </div>
        </div>
    </div>
  );
}

export default LatestEvents;
