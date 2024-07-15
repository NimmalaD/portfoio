import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className='about-me-container'>
      <div className="intro-container">
        <h1 className="typing">Let me Introduce Myself!</h1>
      </div>
      <div className="about-me-content">
        <section className='about-me-section'>
          <div className="text-content">
            <p>Hello! I'm <strong>Dharma Nimmala</strong>, a <strong>developer</strong> with expertise in full-stack development and <strong>microservices</strong>. I specialize in designing RESTful APIs and deploying enterprise applications using React.js, Node.js, and Spring Boot. I am passionate about building <strong>efficient</strong>, flexible, and <strong>user-friendly</strong> applications.</p>
          
            <p>With <strong>hands-on</strong> experience in DevOps tools and Cloud platforms, including AWS, I focus on CI/CD and cloud integration to <strong>optimize</strong> and extend transaction systems, develop visualization tools, and create user-friendly interfaces. My goal is to innovate and deliver <strong>cutting-edge</strong> solutions.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutMe;
