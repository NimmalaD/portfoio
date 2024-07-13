import { useRef, useState } from "react";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import './App.css';
import ContactMe from "./components/ContactMe/ContactMe";
import Skills from "./components/Skills/Skills";

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const contactMeRef = useRef(null)
  const aboutMeRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  const toggleTabs = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <NavBar toggleTabs={toggleTabs} />
      <div className="content">
        <div ref={homeRef}>
          {activeSection === 'home' && <Home toggleTabs={toggleTabs}/>}
        </div>
        <div ref={skillsRef}>
          {activeSection === 'skills' && <Skills />}
        </div>
        <div ref={aboutMeRef}>
          {activeSection === 'aboutme' && <AboutMe />}
        </div>
        <div ref={contactMeRef}>
          {activeSection === 'contactme' && <ContactMe></ContactMe>}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;