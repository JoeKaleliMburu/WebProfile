// components/ProfileSection.js
import React from 'react';

const ProfileSection = () => {
  return (
    <section id="profile" className="profile-section">
      <img src="https://via.placeholder.com/150" alt="Profile" className="profile-img" />
      <div className="profile-details">
        <h1>John Doe</h1>
        <p>
          I am a web developer specializing in front-end technologies with a strong focus on React.js. I love creating
          visually appealing and high-performance web applications. Let’s connect!
        </p>
      </div>
    </section>
  );
};

export default ProfileSection;
