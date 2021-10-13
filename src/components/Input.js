import React from 'react';
import PropTypes from 'prop-types';
import '../styling/input.css';

const Input = ({ filter, onChange }) => (
  <div className="search">
    <input
      type="text"
      value={filter}
      onChange={onChange}
      placeholder="Search Country..."
    />
  </div>
);

Input.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
