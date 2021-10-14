import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import DetailsTop from './DetailsTop';
import CountryRegions from './CountryRegions';
import '../styling/details.css';

const Details = () => {
  const location = useLocation();
  const {
    countryName,
    casesConfirmed,
    deaths,
    regions,
    allRecovered,
    casesOpen,
  } = location.state;

  return (
    <>
      <Navbar text={`${countryName} Covid Stats`} />
      <DetailsTop
        name={countryName}
        confirmed={casesConfirmed}
        deaths={deaths}
        recovered={allRecovered}
        open={casesOpen}
      />
      <CountryRegions regions={regions} countryName={countryName} />
    </>
  );
};

export default Details;
