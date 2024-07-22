import React, { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./NavBar.css";

const NavBar = ({ toggleTabs }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = useCallback(() => {
    if (window.scrollY === 0) {
      setIsAtTop(false);
    } else if (window.scrollY > scrollY) {
      setIsAtTop(true);
    }
    setScrollY(window.scrollY);
  }, [scrollY]);
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[handleScroll]);

  return (
    <div>
      <nav className={`navbar ${isAtTop ? "fade-out" : ""}`}>
        <div className="nav-logo" onClick={() => {toggleTabs("home")
          if(isOpen === true){
            setIsOpen(false)
          }
        }}>
          Dharma Nimmala
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
        <ul className={`nav-contents-ul ${isOpen ? "open" : ""}`}>
          <li className="nav-contents-li" onClick={() => {toggleTabs("home")
          if(isOpen === true){
            setIsOpen(false)
          }}}>
            Home
          </li>
          <li className="nav-contents-li" onClick={() => {toggleTabs("aboutme")
            if(isOpen === true){
              setIsOpen(false)
            }
          }}>
            About Me
          </li>
          <li className="nav-contents-li" onClick={() => {toggleTabs("skills")
            if(isOpen === true){
              setIsOpen(false)
            }
          }}>
            Skills
          </li>
          <li
            className="nav-contents-li"
            onClick={() => {toggleTabs("projects")
              if(isOpen === true){
                setIsOpen(false)
              }
            }}
          >
            Projects
          </li>
          <li
            className="nav-contents-li"
            onClick={() => {toggleTabs("contactme")
              if(isOpen === true){
                setIsOpen(false)
              }
            }}
          >
            Contact Me
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
