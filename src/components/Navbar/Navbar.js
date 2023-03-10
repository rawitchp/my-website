import { faHouse, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
// import Logo from '../../pics/logo.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="menu">
        <NavLink exact="true" activeclassname="active" to="/" className="link">
          <FontAwesomeIcon
            icon={faHouse}
            className="home-icon icon"
            color="#A5C9CA"
          />
        </NavLink>
        <NavLink activeclassname="active" to="/about" className="link">
          <FontAwesomeIcon
            icon={faUser}
            className="user-icon icon"
            color="#A5C9CA"
          />
        </NavLink>
        <NavLink activeclassname="active" to="/contact" className="link">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="mail-icon icon"
            color="#A5C9CA"
          />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
