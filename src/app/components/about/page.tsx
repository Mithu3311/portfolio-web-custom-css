import React from 'react';
import './about.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Welcome to MIT Portfolio! We are dedicated to showcasing the best work, ideas, and passion for creativity.
      </p>
      <div className="about-content">
        <h2>Our Mission</h2>
        <p>
          To inspire and empower individuals by providing a platform to share their unique ideas and projects with the world.
        </p>
        <h2>Our Vision</h2>
        <p>
          To become a global hub for innovation, creativity, and collaboration, where talent meets opportunity.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>Innovation</li>
          <li>Collaboration</li>
          <li>Excellence</li>
          <li>Integrity</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
