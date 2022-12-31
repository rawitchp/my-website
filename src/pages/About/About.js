import React from 'react';
import Loader from 'react-loaders';
import Navbar from '../../components/Navbar/Navbar';
import './About.scss';

function About() {
  return (
    <div>
      <Navbar />
      <div className="container about-page">
        <a href="Resume.pdf" download="Resume.pdf">
          <button>Download my Resume</button>
        </a>
      </div>
      <Loader type="pacman" />
    </div>
  );
}

export default About;
