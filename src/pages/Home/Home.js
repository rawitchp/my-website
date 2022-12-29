import React from 'react';
import Loader from 'react-loaders';
import { NavLink } from 'react-router-dom';
import ReactTyped from 'react-typed';
import Navbar from '../../components/Navbar/Navbar';
import './Home.scss';

function Home() {
  return (
    <>
      <>
        <Navbar />
        <div className="container">
          <div className="home-page">
            <div className="typing">
              <ReactTyped
                strings={['Hi,  ']}
                typeSpeed={40}
                backSpeed={40}
                className="typing-hi"
              ></ReactTyped>

              <ReactTyped
                strings={["I'm Rawitch Payakkawan  "]}
                typeSpeed={50}
                backSpeed={40}
                className="typing-name"
              ></ReactTyped>

              <ReactTyped
                strings={['Frontend Developer  ']}
                typeSpeed={50}
                backSpeed={40}
                className="typing-role"
              ></ReactTyped>
              <NavLink to="/contact" className="contact-btn">
                CONTACT ME
              </NavLink>
            </div>
          </div>
        </div>
      </>
      <Loader type="pacman" />
    </>
  );
}

export default Home;
