import React, { useEffect, useState } from 'react';
import { FaJava, FaPython, FaDatabase, FaCloud, FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaGitAlt, FaAws, FaGithub } from 'react-icons/fa';
import { SiMysql, SiPostgresql, SiMongodb, SiElasticsearch, SiRedis, SiPacker, SiPulumi, SiTerraform, SiSpring, SiRabbitmq, SiIntellijidea, SiEclipseide, SiVisualstudiocode } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
    const [showArticle, setShowArticle] = useState(false)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setShowArticle(true)
        },1000)
        return () => clearTimeout(timer)
    },[])

  return (
    <div className="skills-container">
        <div className='text-container'>
            <h1>My Skills</h1>
        </div>
      <article className={`skills-grid ${showArticle ? 'show' : ''}`}>
        <section className="skill-section">
          <h4>Programming Languages</h4>
          <ul>
            <li><FaJava /> Java</li>
            <li><FaPython /> Python</li>
            <li><FaDatabase /> SQL</li>
            <li><FaCloud /> Shell</li>
            <li><FaCloud /> HCL</li>
          </ul>
        </section>
        <section className="skill-section">
          <h4>Databases</h4>
          <ul>
            <li><SiMysql /> MySQL</li>
            <li><SiPostgresql /> PostgreSQL</li>
            <li><SiMongodb /> MongoDB</li>
            <li><SiElasticsearch /> Elasticsearch</li>
            <li><SiRedis /> Redis</li>
          </ul>
        </section>
        <section className="skill-section">
          <h4>Cloud Technologies</h4>
          <ul>
            <li><FaAws /> AWS</li>
            <li><FaCloud /> GCP</li>
            <li><SiPacker /> Packer</li>
            <li><SiPulumi /> Pulumi</li>
            <li><SiTerraform /> Terraform</li>
            <li><FaGithub /> GitHub Actions</li>
          </ul>
        </section>
        <section className="skill-section">
          <h4>Web Technologies</h4>
          <ul>
            <li><FaHtml5 /> HTML</li>
            <li><FaCss3 /> CSS</li>
            <li><FaJs /> JavaScript</li>
            <li><FaReact /> React.js</li>
            <li><FaNode /> Node.js</li>
            <li><FaCloud /> REST</li>
          </ul>
        </section>
        <section className="skill-section">
          <h4>Frameworks</h4>
          <ul>
            <li><FaNode /> Express</li>
            <li><SiSpring /> Spring</li>
            <li><SiSpring /> Spring MVC</li>
            <li><SiSpring /> Spring Boot</li>
            <li><FaCloud /> OAuth 2.0</li>
          </ul>
        </section>
        <section className="skill-section">
          <h4>Tools</h4>
          <ul>
            <li><FaJava /> Maven</li>
            <li><FaGitAlt /> Git</li>
            <li><FaAws /> Jenkins</li>
            <li><FaCloud /> Kanban</li>
            <li><SiRabbitmq /> RabbitMQ</li>
          </ul>
        </section>
      </article>
    </div>
  );
}

export default Skills;
