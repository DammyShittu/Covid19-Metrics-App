import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowCircleRight } from 'react-icons/fa';
import covid from '../images/covid.png';
import '../styling/countryData.css';

const CountryData = ({ name, confirmedCases }) => (
  <li className="country-data">
    <div className="right">
      <FaArrowCircleRight className="arrow" />
    </div>
    <div className="country">
      <img src={covid} alt="Covid19 Logo" className="covid-img" />
      <aside>
        <h2>{name}</h2>
        <span>Total Confirmed</span>
        <h3>{`${confirmedCases} cases`}</h3>
      </aside>
    </div>
  </li>
);

CountryData.propTypes = {
  name: PropTypes.string.isRequired,
  confirmedCases: PropTypes.number.isRequired,
};

export default CountryData;
