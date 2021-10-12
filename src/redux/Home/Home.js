const FETCH_COUNTRIES = 'covid19-metrics-app/Home/FETCH_COUNTRIES';

export const fetchCountries = (payload) => ({
  type: FETCH_COUNTRIES,
  payload,
});

export const fetchCountriesFromApi = () => async (dispatch) => {
  const countries = await fetch('https://api.covid19tracking.narrativa.com/api/2021-10-11');
  const response = await countries.json();
  if (response) {
    const date = '2021-10-11';
    const regions = response.dates[date].countries;
    const countriesArr = Object.values(regions);
    const oneCountry = countriesArr.map((country) => (
      {
        name: country.name,
        confirmedCases: country.today_confirmed,
        id: country.id,
        allDeaths: country.today_deaths,
        recovered: country.today_recovered,
        openCases: country.today_open_cases,
        allRegions: country.regions,
      }
    ));
    dispatch(fetchCountries(oneCountry));
  }
};

const initialState = [];

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return action.payload;
    default:
      return state;
  }
};

export default countriesReducer;
