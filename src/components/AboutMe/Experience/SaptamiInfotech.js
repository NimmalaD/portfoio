import React from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  FaNode,
} from "react-icons/fa";
import {
  SiMysql,
  SiCss3,
  SiHtml5,
  SiJavascript,
} from "react-icons/si";
import { SiReact } from "react-icons/si";
import { MdOutlineDeveloperMode } from "react-icons/md";
import "./Experience.css";

const SaptamiInfotech = () => {
  return (
    <div>
      <div>
        <article className="keelworks-softwareDev">
          <div className="responsibilities">
            <div className="role-date">
            <h4>Software Developer</h4>
            <h4></h4>
            </div>
            <h4>Responsibilities</h4>
            <ul>
              <li>
                <FiArrowRight />
                Developed and optimized full-stack applications using Node.js
                and React.js, resulting in a 25% increase in user satisfaction
                and a 20% improvement in business efficiency.{" "}
              </li>
              <li>
                <FiArrowRight />
                Created and maintained over 10 REST APIs, improving request
                efficiency through integration with DynamoDB and Redis.
              </li>
              <li>
                <FiArrowRight />
                Implemented automated testing procedures, reducing the bug count
                by 30% and improving release cycles.
              </li>
              <li>
                <FiArrowRight />
                Utilized Test Driven Development (TDD) methodology to ensure
                high-quality software delivery.
              </li>
              <li>
                <FiArrowRight />
                Participated in code reviews and provided constructive feedback
                to peers.
              </li>
            </ul>
          </div>
          <div className="skills-used">
            <h4>Skills Used</h4>
            <ul>
              <li>
                <SiReact /> React
              </li>
              <li>
                <FaNode /> Node.js
              </li>
              <li>
                <SiMysql /> MySQL
              </li>
              <li>
                <MdOutlineDeveloperMode /> RestAPI
              </li>
            </ul>
          </div>
        </article>
      </div>
      <div>
        <article className="keelworks-softwareDev">
          <div className="responsibilities">
          <div className="role-date">
            <h4>Software Developer Intern</h4>
            <h4></h4>
            </div>
            <ul>
              <li>
                <FiArrowRight />
                Contributed to the development of a client's web application
                using JavaScript, HTML, and CSS, resolving 70+ minor errors and
                improving application load time by 15%.
              </li>
              <li>
                <FiArrowRight />
                Implemented Swagger specification for REST API design,
                documentation, testing and deployment to expose services to
                clients, resulting in 40% reduction in integration time.{" "}
              </li>
              <li>
                <FiArrowRight />
                Implemented automated testing procedures, reducing the bug count
                by 30% and improving release cycles.
              </li>
              <li>
                <FiArrowRight />
                Collaborated with cross-disciplinary teams to gather and analyze
                requirements, ensuring the developed software solutions
                effectively addressed business needs.{" "}
              </li>
            </ul>
          </div>
          <div className="skills-used">
            <h4>Skills Used</h4>
            <ul>
              <li>
                <SiReact /> React
              </li>
              <li>
                <SiJavascript /> JavaScript
              </li>
              <li>
                <SiHtml5 /> HTML
              </li>
              <li>
                <SiCss3 /> CSS
              </li>
              <li>
                <MdOutlineDeveloperMode /> RestAPI
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SaptamiInfotech;
