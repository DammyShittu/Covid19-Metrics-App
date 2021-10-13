import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';
import Navbar from './Navbar';
import covid from '../images/covid.png';
import '../styling/details.css';

const Details = () => {
  const location = useLocation();
  const {
    countryName,
    casesConfirmed,
    deaths,
    regions,
  } = location.state;

  return (
    <>
      <Navbar text={`${countryName} Covid Stats`} />
      <div className="country-details">
        <img src={covid} alt="Covid19 Logo" className="covid-img" />
        <aside>
          <h2>{countryName}</h2>
          <div className="details">
            <div>
              <span>Total Confirmed </span>
              <h3>{`${casesConfirmed} cases`}</h3>
            </div>
            <div>
              <span>Total Deaths</span>
              <h3>{`${deaths} cases`}</h3>
            </div>
          </div>
        </aside>
      </div>
      <div className="stats">
        <h3 className="stats-name">Stats By Region</h3>
      </div>
      <ul className="regions">
        {regions && regions.map((region) => {
          const {
            name,
            today_confirmed: todayConfirmed,
            today_deaths: todayDeaths,
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
};

export default Details;
