// components/SkillsSection.js
import React from 'react';
import './skills.css';
import react from '../Images/react.jpeg';
import node from '../Images/node.png';
import js from '../Images/js.jpeg';
import gb from '../Images/download (1).jpeg';

const SkillsSection = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Front-End</h2>
      <div className='icons'>
        <img src={js} title='JavaScript' alt='JavaScript' />
        <img src={node} title='node.js' alt='node' />
        <img src={react} title='React.js' alt='React.js' />
        <img src={gb} title='github'  alt='github' />
      </div>
    </section>
  );
};

export default SkillsSection;
