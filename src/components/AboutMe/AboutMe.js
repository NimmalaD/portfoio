import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <>
      <div className="intro-container">
        <h1 className="typing">Let me Introduce Myself!</h1>
      </div>
      <div className="about-me-content">
        <section className='about-me-section'>
          <div className="text-content">
            <p>
              Hello 👋, I'm Dharma Thanishq Nimmala, a dedicated Software Engineer based in Boston, MA, specializing in full-stack development and microservices. With a strong foundation in Java, React.js, Node.js, and Spring Boot, I craft high-performance solutions that enhance user experience and business efficiency.
            </p>
            <p>
              At Saptami Infotech, I have successfully designed and developed modern applications, improving user satisfaction and business processes. My expertise spans across various databases like MySQL, PostgreSQL, and MongoDB, ensuring robust and scalable solutions.
            </p>
            <p>
              Pursuing my Master of Science in Information Systems at Northeastern University, I have engaged in projects that showcase my skills in cloud services, web application development, and secure data management. My technical proficiency extends to DevOps tools and cloud platforms like AWS, enabling seamless CI/CD and cloud integration.
            </p>
            <p>
              Let's connect and explore how my expertise can contribute to your organization's success.
            </p>
          </div>
          <div className="image-content">
            <img className="image-1" src="./images/northeasternLogo.jpg" alt="Image description" />
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutMe;
