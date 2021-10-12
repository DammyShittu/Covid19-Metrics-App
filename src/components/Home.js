import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountriesFromApi } from '../redux/Home/Home';

const Home = () => {
  const state = useSelector((state) => state.countriesReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountriesFromApi());
  }, []);

  return (
    <ul>
      {state && state.map((country) => {
        const { name, confirmedCases, id } = country;
        return (
          <li key={id}>
            <h2>{name}</h2>
            <h3>{confirmedCases}</h3>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
