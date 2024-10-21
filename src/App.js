import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import PortfolioSection from './components/PortofolioSection';
import ContactSection from './components/ContactSession';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProfileSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}

export default App;

