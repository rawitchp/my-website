import React from 'react';
import Loader from 'react-loaders';
import Navbar from '../../components/Navbar/Navbar';
import './About.scss';
import Resume from '../../pics/Resume.png';
import ReactTyped from 'react-typed';

function About() {
  return (
    <div>
      <Navbar />
      <div className="container about-page">
        <div className="text-zone">
          <ReactTyped
            strings={['About me  ']}
            startDelay={1300}
            typeSpeed={40}
            backSpeed={40}
            className="typing-about"
          ></ReactTyped>
        </div>
        <a href="Resume.pdf" download="Resume.pdf">
          <button>Download my Resume</button>
        </a>
        <div>
          <img src={Resume} alt="" className="resume-pic" />
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  );
}

export default About;
