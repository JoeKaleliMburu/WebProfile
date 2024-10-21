// components/PortfolioSection.js
import React from 'react';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="projects">
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of the project goes here.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of the project goes here.</p>
        </div>
        <div className="project">
          <h3>Project 3</h3>
          <p>Description of the project goes here.</p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
