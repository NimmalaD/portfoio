import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from 'react-icons/fi';
import "./NavBar.css";

const NavBar = ({ toggleTabs }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsAtTop(false);
    } else if (window.scrollY > scrollY) {
      setIsAtTop(true);
    }
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div>
      <nav className={`navbar ${isAtTop ? "fade-out" : ""}`}>
        <div className="nav-logo" onClick={()=>toggleTabs('home')}>Dharma Nimmala</div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
        <ul className={`nav-contents-ul ${isOpen ? 'open' : ''}`}>
          <li className="nav-contents-li" onClick={() => toggleTabs("home")}>
            Home
          </li>
          <li className="nav-contents-li" onClick={() => toggleTabs("aboutme")}>
            About Me
          </li>
          <li className="nav-contents-li" onClick={() => toggleTabs("skills")}>
            Skills
          </li>
          <li className="nav-contents-li" onClick={() => toggleTabs("projects")}>
            Projects
          </li>
          <li className="nav-contents-li" onClick={() => toggleTabs("contactme")}>
            Contact Me
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
