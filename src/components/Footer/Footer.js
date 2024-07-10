// src/components/Footer/Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>Created By Dharma Thanishq Nimmala</p>
        </div>
        <div className="footer-icons">
          <a href="https://github.com/NimmalaD" target="_blank" rel="noopener noreferrer">
            <img src="./images/icons8-github-48.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/dharma-thanishq/" target="_blank" rel="noopener noreferrer">
            <img src="./images/icons8-linkedin-48.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
