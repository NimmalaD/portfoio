import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";
import './ContactPoints.css'

const ContactPoints = () => {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcons(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <div className={`contact-icons-container ${showIcons ? "slide-in" : ""}`}>
        <div className="contact-icons">
          <a
            className={`${showIcons ? "slide-in" : ""}`}
            href="https://github.com/NimmalaD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40} />
          </a>
          <a
            className={`${showIcons ? "slide-in" : ""}`}
            href="https://www.linkedin.com/in/dharma-thanishq/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            className={`${showIcons ? "slide-in" : ""}`}
            href="mailto:dharmanimmala04@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMailBulk size={40} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPoints;
