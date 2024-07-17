import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaJava, FaPython, FaNode, FaCloud, FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt, FaAws, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiRabbitmq,SiExpress, SiPacker, SiPulumi, SiTerraform, SiSpring, SiRedis, SiVisualstudiocode, SiPostgresql } from 'react-icons/si';
import { SiReact } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import "./Experience.css";

const KeelWorks = () => {
  return (
    <div>
      <div>
        <article className="keelworks-softwareDev">
          <div className="responsibilities">
            <div className="role-date">
            <h4 className="role-name">Software Developer</h4>
            <h4 className="date">June 2024 - Present</h4>
            </div>
            <h4>Responsibilities</h4>
            <ul>
              <li>
                <FiArrowRight />
                Collaborated with front-end dev team to create multiple versions of the homepage for KeelCompass Knowledge Base.
              </li>
              <li>
                <FiArrowRight />
                Worked on feature development to implement search functionality based on content type, category, and popularity and implemented responsive and interactive homepage designs using React.js.
              </li>
              <li>
                <FiArrowRight />
                Ensured the user interface is consistent with the design specifications provided in Figma.
              </li>
              <li>
                <FiArrowRight />
                Assisted UI/UX team with modern feature designs.
              </li>
            </ul>
          </div>
          <div className="skills-used">
            <h4>Skills Used</h4>
            <ul>
            <li><SiReact /> React</li>
            <li><FaNode /> Node.js</li>
            <li><CgFigma /> Figma</li>
            
          </ul>
          </div>
        </article>
      </div>
    </div>
  );
};

export default KeelWorks;
