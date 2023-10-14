import React, { useState } from 'react';
import './App.css';

function App() {
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const scrollToAbout = () => {
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
    setShowAbout(true);
  };

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="portfolio">
      <nav className="navbar">
        <ul>
          <li><a href="#home" onClick={scrollToAbout}>Home</a></li>
          <li><a href="#about" onClick={scrollToAbout}>About</a></li>
          <li><a href="#contact" onClick={toggleContact}>Contact</a></li>
        </ul>
      </nav>

      <h1 id="home">Thanshita</h1>

      <div id="about" className={`about-section ${showAbout ? 'show' : ''}`}>
        <h2>About Me</h2>
        <p>Name: Thanshita</p>
        <h2>Education</h2>
        <p>B.Tech in Computer Science with Specialization in AI and Robotics,CGPA:8.98</p>
        <p>Narayana group of schools,Percentage:96.5</p>
        <h2>Skills</h2>
        <p>Web Development, App Development, Management</p>
      </div>

      <div className="divider" />
      <div className="experience-section">
        <h2>Experience</h2>
        <p>Social Media Head</p>
        <p>Marketing Member</p>
      </div>

      <div className="divider" />
      <div className={`contact-section ${showContact ? 'show' : ''}`}>
        <h2 id="contact">Contact</h2>
        {showContact && <p>Contact Number: 6281592840</p>}
      </div>

      <div className="footer">
        <a href="https://www.instagram.com/" target="_blank">instagram
          <i clas='fa fa-instagram'></i>
        </a>
        <a href="https://www.facebook.com/" target="_blank">facebook
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank">linkedin
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default App;
