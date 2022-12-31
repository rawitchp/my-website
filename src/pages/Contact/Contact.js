import React, { useRef } from 'react';
import './Contact.scss';
import Navbar from '../../components/Navbar/Navbar';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';

import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8upt7te',
        'template_dj2jalh',
        form.current,
        '9FaHPjUs1Np4UTPT1'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };
  return (
    <div>
      <Navbar />
      <div className="container contact-page">
        <form ref={form} onSubmit={sendEmail}>
          <div className="email">Email Me</div>
          <input type="text" placeholder="name" name="name" required />
          <input type="email" placeholder="email" name="email" required />
          <textarea placeholder="message" name="message" required />
          <input type="submit" value="send" className="send-btn" />
        </form>
        <div className="contact">
          <div>Contact me</div>
          <a
            href="https://www.facebook.com/rawitch.payakkawan/"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              Facebook
              <AiFillFacebook className="fb-icon" />
            </button>
          </a>
          <a
            href="https://www.instagram.com/_mix.rw_/"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              Instagram
              <AiFillInstagram className="ig-icon" />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/rawitch-payakkawan/"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              LinkedIn
              <AiFillLinkedin className="li-icon" />
            </button>
          </a>
          <a
            href="https://github.com/rawitchp"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              Github
              <AiFillGithub className="gh-icon" />
            </button>
          </a>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  );
}

export default Contact;
