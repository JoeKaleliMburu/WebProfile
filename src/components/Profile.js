// components/ProfileSection.js
import React from 'react';
import '../components/Profile.css';
import Image from '../Images/8106002d-3e83-419f-bfcf-9856f8961de9.jpeg';
import SkillsSection from './SkillsSection';

const Profile = () => {
  return (
    <section id="profile" className="profile-section">
      <img src= {Image} alt="Profile" className="profile-img" />
      <div className="profile-details">
        <h1>Joe Dev</h1>
        <p>
          I am a web developer specializing in front-end technologies with a strong focus on React.js. I love creating
          visually appealing and high-performance web applications. Let’s connect!
        </p>
        <div className='SkillsSection'>
        <SkillsSection/>
        </div>
      </div>
    </section>
  );
};

export default Profile;
