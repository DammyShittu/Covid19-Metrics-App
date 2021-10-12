import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCountriesFromApi } from '../redux/Home/Home';
import Input from './Input';
import Navbar from './Navbar';

const Home = () => {
  const state = useSelector((state) => state.countriesReducer);

  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fetchCountriesFromApi());
  }, []);

  const onChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <Navbar text="World Covid-19 Stats" year="2021" />
      <section>
        <Input filter={filter} onChange={onChange} />
        <ul>
          {state && state
            .filter((location) => location.name.toLowerCase().includes(filter.toLowerCase()) || filter === '')
            .map((country) => {
              const {
                name,
                confirmedCases,
                id,
                allDeaths,
                recovered,
                openCases,
                allRegions,
              } = country;
              return (
                <Link
                  key={id}
                  to={{
                    pathname: `/details/${name}`,
                    state: {
                      countryName: name,
                      countryId: id,
                      casesConfirmed: confirmedCases,
                      deaths: allDeaths,
                      allRecovered: recovered,
                      casesOpen: openCases,
                      regions: allRegions,
                    },
                  }}
                >
                  <li>
                    <h2>{name}</h2>
                    <h3>{confirmedCases}</h3>
                  </li>
                </Link>
              );
            })}
        </ul>
      </section>
    </>
  );
};

export default Home;
