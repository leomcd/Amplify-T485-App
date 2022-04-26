import React from 'react';

import { Authenticator } from '@aws-amplify/ui-react'

import './css/home.css'

function Home() {
  return (
    <>
      <div id="title" className="container-fluid color-scheme-alt">
        <div className="row justify-content-center">
          <img src="images/scouts_bsa.png" className="center-block" alt="scouts_bsa" />
        </div>
        <div className="row justify-content-center">
          <a href="https://www.facebook.com/pg/Troop485/about/">
            <button type="button" className="btn btn-dark btn-lg" alt="apply">
            <i className="button-icon fas fa-hiking"></i> Start your adventure.</button>
          </a>
        </div>
      </div>

      <div id="features" className="container-fluid">
        <div className="row">
          <div className="feature-box col-lg-4">
            <i className="icon fas fa-landmark fa-3x"></i>
            <h3>Since 1976.</h3>
            <p className="features-text">For Scouts ages 11-17.<br />
              We meet Monday nights from 7 to 8:30 pm. <br />
              Westminster Presbyterian Church.<br />
              32111 Watergate Rd, Westlake Village, CA 91361.</p>
          </div>
          <div className="feature-box col-lg-4">
            <i className="icon far fa-compass fa-3x"></i>
            <h3>Scout-Led.</h3>
            <p className="features-text">"Train Scouts to do a job, then let them do it. Never do anything a boy can do." -Sir Robert Baden-Powell</p>
          </div>
          <div className="feature-box col-lg-4">
            <i className="icon fas fa-campground fa-3x"></i>
            <h3>Be Prepared.</h3>
            <p className="features-text">Build confidence and self-esteem. <br />
              Learn life skills and leadership.<br />
              Be part of something bigger than yourself.</p>
          </div>
        </div>
      </div>

      <div id="testimonials" className="color-scheme-alt">
        <div id="carouselControls" className="carousel slide" data-ride="false">
          <div className="carousel-inner">
            <div className="carousel-item active container-fluid">
              <h2>Scouting gives our whole family a way to adventure together and to serve our local community.</h2>
              <img className="testimonial-image" src='images/tim_profile.png' alt="tim_quote" /><br></br>
              <em>Tim K. <br></br>
                Agoura Hills, CA</em>
            </div>
            <div className="carousel-item container-fluid">
              <h2 className="testimonial-text">I can't wait for our next electronics night.</h2>
              <img className="testimonial-image" src="images/bash.png" alt="bash_quote" /><br></br>
              <em>Bash H-K. <br></br>
                Agoura Hills, CA</em>
            </div>
            <div className="carousel-item container-fluid">
              <h2 className="testimonial-text">I enjoy scouting for its cooking.</h2>
              <img className="testimonial-image" src="images/leo_profile.png" alt="leo_quote" /><br></br>
              <em>Leo McD <br></br>
                Agoura Hills, CA</em>
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
      </div>

      <div id="scoutmaster" className="scoutmaster-letter col-lg-12 container-fluid">
        <h3 className="section-heading">Letter from the Scoutmaster</h3>
        <p>Troop 485 provides young adults the opportunity to experience Scouting in a smaller Troop with many leadership opportunities. The smaller size allows more mentorship between experienced and inexperienced scouts. This model provides
          frequent
          teaching and leadership development opportunities as well as the ability to hold many Troop leadership positions (Patrol Leader and Senior Patrol Leader). Rank advancement follows the mentorship so Scouts grow in Scouting rapidly.
          The Troop has monthly outings as weather permits with approximately 6 camping trips per year as well as a week long trip to a Scout Camp. After one year in Scouting, during the campouts, the boys can setup their own tents, cook their own
          food, clean their gear and execute a planned activity with minimal supervision.</p>
        <p>
          As I was never in Scouting, to see my sons become so independent at the ages of 11 and 12, has been a real eye-opener and made me into a Scouting believer. The basic Scout and leadership skills they learn through Rank Advancement and the
          advanced technical skills they learn through Merit Badges develops young adults into the antithesis of the perception of the modern millennial. They become capable young adults able to perform at an adult level so they develop confidence
          and
          true self-esteem.
        </p>
        <p>
          Beyond the skills, Scouting in Troop 485 develops character with a focus on living the Scout Oath and Scout Law, highlighting these at Scout meetings, Boards of Review and Scoutmaster conferences.
        </p>
      </div>
      <div className="signature col-lg-12 container-fluid">
        <img className="testimonial-image left-block" src='images/scoutmaster.png' alt="scoutmaster" />
      </div>
      <div className="signature col-lg-12 container-fluid">
        <em>Greg Dato<br></br>
        Troop 485 Scoutmaster</em>
      </div>
    </>
  );
}

export default Home;
