import React, { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = ({toggleTabs}) => {
  const [currentDate, setcurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentDate(new Date());
    });
    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div>
      <nav className="navbar">
        <div>
          <p>{formattedDate}</p>
        </div>
        <ul className="nav-contents-ul">
          <li className="nav-contents-li" onClick={()=>toggleTabs('home')}>Home</li>
          <li className="nav-contents-li" onClick={()=>toggleTabs('skills')}>Skills</li>
          <li className="nav-contents-li" onClick={()=>toggleTabs('aboutme')}>About Me</li>
          <li className="nav-contents-li" onClick={()=>toggleTabs('projects')}>Projects</li>
          <li className="nav-contents-li" onClick={()=>toggleTabs('links')}>Links</li>
          <li className="nav-contents-li" onClick={()=>toggleTabs('contactme')}>Contact Me</li>

        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
