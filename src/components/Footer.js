import React from 'react';

import './css/footer.css'

function Footer() {
  return (
    <footer className="white-section" id="footer">
      <div className="container-fluid">
        <a href="https://www.facebook.com/pg/Troop485/about/" className="social-link">
          <i className="social-icon fab fa-facebook-f"></i>
        </a>
        <a href="mailto:boyscouts485@gmail.com" className="social-link">
          <i className="fas fa-envelope social-icon"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
