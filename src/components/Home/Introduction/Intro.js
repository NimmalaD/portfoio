import React from "react";
import "./Intro.css";
import ContactPoints from "../../ContactPoints/ContactPoints";

const Intro = ({ toggleTabs }) => {

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
      <ContactPoints></ContactPoints>
    </div>
  );
};

export default Intro;
