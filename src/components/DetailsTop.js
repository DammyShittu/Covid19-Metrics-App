import React from 'react';
import PropTypes from 'prop-types';
import covid from '../images/covid.png';

const DetailsTop = ({
  name,
  confirmed,
  deaths,
  recovered,
  open,
}) => (
  <>
    <div className="country-details">
      <img src={covid} alt="Covid19 Logo" className="covid-img" />
      <aside>
        <h2>{name}</h2>
        <div className="details-top">
          <div>
            <span>Total Confirmed </span>
            <h3>{`${confirmed} cases`}</h3>
          </div>
          <div>
            <span>Total Deaths</span>
            <h3>{`${deaths} cases`}</h3>
          </div>
          <div>
            <span>Total Recovered</span>
            <h3>{`${recovered} cases`}</h3>
          </div>
          <div>
            <span>Total Open</span>
            <h3>{`${open} cases`}</h3>
          </div>
        </div>
      </aside>
    </div>

  </>
);

DetailsTop.propTypes = {
  name: PropTypes.string.isRequired,
  confirmed: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired,
  open: PropTypes.number.isRequired,
};

export default DetailsTop;
