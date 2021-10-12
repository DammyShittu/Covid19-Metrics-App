import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountriesFromApi } from '../redux/Home/Home';
import Input from './Input';

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
    <section>
      <Input filter={filter} onChange={onChange} />
      <ul>
        {state && state
          .filter((location) => location.name.toLowerCase().includes(filter.toLowerCase()) || filter === '')
          .map((country) => {
            const { name, confirmedCases, id } = country;
            return (
              <li key={id}>
                <h2>{name}</h2>
                <h3>{confirmedCases}</h3>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Home;
