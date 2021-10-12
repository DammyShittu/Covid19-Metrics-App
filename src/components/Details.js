import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const Details = () => {
  const location = useLocation();
  const {
    countryName,
    casesConfirmed,
    deaths,
    allRecovered,
    casesOpen,
    regions,
  } = location.state;

  return (
    <>
      <Navbar text={`${countryName} Covid Stats`} />
      <h3>{`New Data - ${countryName}`}</h3>
      <h3>{casesConfirmed}</h3>
      <h3>{deaths}</h3>
      <h3>{allRecovered}</h3>
      <h3>{casesOpen}</h3>
      <ul>
        {regions && regions.map((region) => {
          const {
            name,
            today_confirmed: todayConfirmed,
            today_deaths: todayDeaths,
          } = region;
          return (
            <li key={name}>
              <h3>{name}</h3>
              <h3>{todayConfirmed}</h3>
              <h3>{todayDeaths}</h3>
            </li>
          );
        })}
      </ul>

      {(!regions || !regions[0]) && (
        <h3>
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
