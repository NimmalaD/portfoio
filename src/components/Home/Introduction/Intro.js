import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "./Intro.css";

const Intro = ({ toggleTabs }) => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcons(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <section className="intro-section">
        <div className="intro-name">
          <h1 className="h1-there">Hi There!</h1>
          <h1 className="h1-name">
            I am <strong>Dharma Thanishq Nimmala</strong>
          </h1>
          <h1 className="h1-position">Software Engineer</h1>
          <div className="intro-know-more">
            <button className="know-more-text" onClick={() => toggleTabs('aboutme')}> Know More</button>
          </div>
        </div>
        <div className="intro-image">
          <img src="./images/IMG_4262.JPG" alt="Profile Pic"></img>
        </div>
      </section>
      <div className={`contact-icons-container ${showIcons ? 'slide-in' : ''}`}>
        <div className="contact-icons">
          <a className={`${showIcons ? 'slide-in' : ''}`} href="https://github.com/NimmalaD" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} />
          </a>
          <a className={`${showIcons ? 'slide-in' : ''}`} href="https://www.linkedin.com/in/dharma-thanishq/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
