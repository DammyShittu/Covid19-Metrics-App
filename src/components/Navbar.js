import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaMicrophone, FaArrowLeft, FaCog } from 'react-icons/fa';
import '../styling/navbar.css';

const Navbar = ({ text, year }) => (
  <header>
    <nav className="nav">
      <div className="year">
        <Link to="/" className="left-arrow">
          <FaArrowLeft className="icon" />
        </Link>
        <h1>{year}</h1>
      </div>
      <div>
        <span>{text}</span>
      </div>
      <div className="settings">
        <FaMicrophone className="icon" />
        <FaCog className="icon" />
      </div>
    </nav>
  </header>
);

Navbar.propTypes = {
  text: PropTypes.string.isRequired,
  year: PropTypes.string,
};

Navbar.defaultProps = {
  year: '',
};

export default Navbar;
