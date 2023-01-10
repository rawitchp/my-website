import React from 'react';
import Loader from 'react-loaders';
import Navbar from '../../components/Navbar/Navbar';
import './About.scss';
import Resume from '../../pics/Resume.png';
import ReactTyped from 'react-typed';
import { ImPacman } from 'react-icons/im';

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
          <div className="detail">
            My name is Rawitch Payakkawan. You can call me Mix. I am studying at
            Kasetsart University, Faculty of Engineering, Major in Computer
            engineering. I have been learning a lot of subjects such as problem
            solving, algorithms, data structure, database, software engineer
            etc.
          </div>
          <br />
          <br />
          <ReactTyped
            strings={['Education  ']}
            startDelay={1300}
            typeSpeed={40}
            backSpeed={40}
            className="typing-about"
          ></ReactTyped>
          <div className="detail">
            2020-2023 <br />
            Kasetsart University (third year)
            <br />
            <br />
            Faculty of Engineering,
            <br />
            Major in Computer Engineering
          </div>
          <br />
          <br />
          <ReactTyped
            strings={['My Skills  ']}
            startDelay={1300}
            typeSpeed={40}
            backSpeed={40}
            className="typing-about"
          ></ReactTyped>
          <ul>
            <li>
              <ImPacman className="pacman" /> Python
            </li>
            <li>
              <ImPacman className="pacman" /> C
            </li>
            <li>
              <ImPacman className="pacman" /> C++
            </li>
            <li>
              <ImPacman className="pacman" /> Javascript
            </li>
            <li>
              <ImPacman className="pacman" /> HTML
            </li>
            <li>
              <ImPacman className="pacman" /> ReactJS
            </li>
            <li>
              <ImPacman className="pacman" /> NodeJS
            </li>
            <li>
              <ImPacman className="pacman" /> ExpressJS
            </li>
          </ul>
          <br />
          <br />
          <ReactTyped
            strings={['Activities  ']}
            startDelay={1300}
            typeSpeed={40}
            backSpeed={40}
            className="typing-about"
          ></ReactTyped>
          <ul>
            <li>
              <ImPacman className="pacman" />
              Teacher assistant for KULearn <br />
              (real - world programming)
            </li>
            <br />
            <li>
              <ImPacman className="pacman" />
              Teacher assistant in Seed:zero
              <br />
              (Front - End)
            </li>
          </ul>
          <br />
          <br />
          <ReactTyped
            strings={['My Projects  ']}
            startDelay={1300}
            typeSpeed={40}
            backSpeed={40}
            className="typing-about"
          ></ReactTyped>
          <div>
            <div>
              <div className="topic">KUeat (in process)</div>
              <div className="detail">
                KUeat is a review website for KU students to review restaurant
                in Kasetsart University.
              </div>
            </div>
            <br />
            <div>
              <div className="topic">Mrw Store</div>
              <div className="detail">
                Mrw Store is an e-commerce website that use Redux concept and
                use PayPal payment.
              </div>
            </div>
            <br />
            <div>
              <div className="topic">KUlony</div>
              <div className="detail">
                KUlony is a social media website for KU students to interact
                with each other.
              </div>
            </div>
            <br />
            <div>
              <div className="topic">YAYA FEVER</div>
              <div className="detail">
                YAYA FEVER project is a tree-managing website. It can water the
                plants automatically, check humidity, check height and sell
                plants.
              </div>
            </div>
            <br />
          </div>
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
