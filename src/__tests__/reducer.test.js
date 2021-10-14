import reducer from '../redux/Home/Home';

const mockStore = {
  allCovid: {
    covidCountries: [
      {
        allDeaths: 7234,
        allRegions: [],
        confirmedCases: 155627,
        id: 'afghanistan',
        name: 'Afghanistan',
      },
    ],
  },
};

describe('Test', () => {
  test('Initial State', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });
});

describe('Mock Countries Reducer', () => {
  test('Test Countries Reducer With Mock Data', () => {
    const FETCH_COUNTRIES = 'covid19-metrics-app/Home/FETCH_COUNTRIES';
    const store = mockStore;
    const action = {
      type: FETCH_COUNTRIES,
      payload: {
        covidCountries: [
          {
            allDeaths: 7234,
            allRegions: [],
            confirmedCases: 155627,
            id: 'afghanistan',
            name: 'Afghanistan',
          },
        ],
        total: 555536,
      },
    };
    expect(reducer(store.allCovid, action)).toEqual({
      covidCountries: [
        {
          allDeaths: 7234,
          allRegions: [],
          confirmedCases: 155627,
          id: 'afghanistan',
          name: 'Afghanistan',
        },
      ],
      total: 555536,
    });
  });
});
