import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from '../components/Home';
import CountryData from '../components/CountryData';
import Input from '../components/Input';
import Navbar from '../components/Navbar';
import World from '../components/World';
import CountryRegions from '../components/CountryRegions';
import DetailsTop from '../components/DetailsTop';

describe('All components/pages render correctly', () => {
  test('Home component renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <Home />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('CountryData component renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <CountryData name="Belgium" confirmedCases={22} />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Input component renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <Input filter="den" onChange={() => {}} />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('CountryRegions component renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <CountryRegions regions={[]} countryName="France" />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('DetailsTop component renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <DetailsTop
              name="Nigeria"
              confirmed={7889}
              deaths={546}
              recovered={4987}
              open={2178}
            />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Navbar component renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <Navbar text="World" year="2021" />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('World component renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <World totalConfirmed={456765} />
          </Provider>
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
