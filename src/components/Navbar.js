import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaMicrophone } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

const Navbar = ({ text, year }) => (
  <section>
    <div>
      <Link to="./">
        <AiOutlineArrowLeft />
      </Link>
      <h1>{year}</h1>
    </div>
    <div>
      <h2>{text}</h2>
    </div>
    <div>
      <FaMicrophone />
      <MdSettings />
    </div>
  </section>
);

Navbar.propTypes = {
  text: PropTypes.string.isRequired,
  year: PropTypes.string,
};

Navbar.defaultProps = {
  year: '',
};

export default Navbar;
