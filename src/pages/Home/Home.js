import React from 'react';
import Loader from 'react-loaders';
import { NavLink } from 'react-router-dom';
import ReactTyped from 'react-typed';
import Navbar from '../../components/Navbar/Navbar';
import './Home.scss';
import Profile2 from '../../pics/Profile2.png';
import Logo from '../../pics/logo.png';
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
                startDelay={1300}
                typeSpeed={40}
                backSpeed={40}
                className="typing-hi"
              ></ReactTyped>

              <ReactTyped
                strings={["I'm Rawitch Payakkawan  "]}
                startDelay={1300}
                typeSpeed={50}
                backSpeed={40}
                className="typing-name"
              ></ReactTyped>

              <ReactTyped
                strings={['Frontend Developer  ']}
                startDelay={1300}
                typeSpeed={50}
                backSpeed={40}
                className="typing-role"
              ></ReactTyped>
              <NavLink to="/contact" className="contact-btn">
                CONTACT ME
              </NavLink>
            </div>
            <div className="pic-container">
              <img src={Profile2} alt="" className="homepage-pic" />
            </div>
            <div>
              <img src={Logo} alt="logo" className="logo-pic" />
            </div>
          </div>
        </div>
      </>
      <Loader type="pacman" />
    </>
  );
}

export default Home;
