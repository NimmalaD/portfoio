import React, { useEffect, useState } from 'react';
import { FaJava, FaPython, FaNode, FaCloud, FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt, FaAws, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPacker, SiPulumi, SiTerraform, SiSpring, SiRedis, SiVisualstudiocode, SiPostgresql } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
    const [showArticle, setShowArticle] = useState(false)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setShowArticle(true)
        },1000)
        return () => clearTimeout(timer)
    },[])

  return (
    <div className="projects-container">
        <div className='text-container'>
            <h1>My Projects</h1>
        </div>
      <article className={`projects-grid ${showArticle ? 'show' : ''}`}>
        <section className="project-section">
          <h4>Cloud Native Application</h4>
          <p>Implemented a cloud-native application on AWS, utilizing Pulumi for infrastructure, GitHub Actions for CI/CD, Packer for VM images, and Mocha for integration test cases, ensuring robust functionality and scalability.</p>
          <ul>
            <li><FaAws /> AWS</li>
            <li><SiPulumi /> Pulumi</li>
            <li><FaNode /> Node.js</li>
            <li><FaPython /> Python</li>
            <li><FaCloud /> Shell</li>
          </ul>
        </section>
        <section className="project-section">
          <h4>NU Events</h4>
          <p>Engineered a responsive end-to-end Full-stack web Application, which includes user authentication, search, register, bookmark events by user, and create events by admin using Node.js and ReactJS.</p>
          <ul>
            <li><SiMongodb /> MongoDB</li>
            <li><SiExpress /> Express.js</li>
            <li><FaReact /> React.js</li>
            <li><FaNode /> Node.js</li>
          </ul>
        </section>
        <section className="project-section">
          <h4>Advance Big Data Indexing</h4>
          {/* <p>Developed a web application capable of validating structured data in JSON format against a predefined JSON schema. Utilized OAuth 2.0 for secure authorization, leveraging Google Identity Provider (IDP) for token signing and validation. Executed data queuing and indexing to optimize search functionality and data retrieval.</p> */}
          <p>Developed a web application to validate JSON data against a schema, using OAuth 2.0 with Google IDP for secure authorization. Optimized search functionality and data retrieval with queuing and indexing.</p>
          <ul>
            <li><FaJava /> SpringBoot</li>
            <li><SiRedis /> Redis</li>
            <li><FaCloud />Elasticsearch</li>
          </ul>
        </section>
      </article>
    </div>
  );
}

export default Projects;
