import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

const CountryRegions = ({ regions, countryName }) => (
  <>
    <div className="stats">
      <h3 className="stats-name">Stats By Region</h3>
    </div>
    <ul className="regions">
      {regions && regions.map((region) => {
        const {
          name,
          today_confirmed: todayConfirmed,
          today_deaths: todayDeaths,
          today_recovered: todayRecovered,
          today_open_cases: todayOpen,
        } = region;
        return (
          <li key={name} className="region-list">
            <div>
              <div className="right">
                <FaArrowCircleRight className="arrow" />
              </div>
              <h3 className="region-name">{name}</h3>
              <div className="region-detail">
                <div>
                  <span>Total Confirmed </span>
                  <h3>{`${todayConfirmed} cases`}</h3>
                </div>
                <div>
                  <span>Total Deaths</span>
                  <h3>{`${todayDeaths} cases`}</h3>
                </div>
                <div>
                  <span>Total Recovered</span>
                  {(todayRecovered >= 0) && <h3>{`${todayRecovered} cases`}</h3>}
                  {(todayRecovered === undefined) && <h3>0 cases</h3>}
                </div>
                <div>
                  <span>Total Open</span>
                  {todayOpen && <h3>{`${todayOpen} cases`}</h3>}
                  {(!todayOpen) && <h3>0 cases</h3>}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>

    {(!regions || !regions[0]) && (
      <h3 className="apology">
        We apologize!!
        <br />
        There is currently no regional data available for&nbsp;
        {countryName}
      </h3>
    )}
  </>
);

CountryRegions.propTypes = {
  regions: PropTypes.instanceOf(Array).isRequired,
  countryName: PropTypes.string.isRequired,
};

export default CountryRegions;
