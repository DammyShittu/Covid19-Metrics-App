const FETCH_COUNTRIES = 'covid19-metrics-app/Home/FETCH_COUNTRIES';

export const fetchCountries = (payload) => ({
  type: FETCH_COUNTRIES,
  payload,
});

let todaysDate = new Date();
const day = String(todaysDate.getDate()).padStart(2, '0');
const month = String(todaysDate.getMonth() + 1).padStart(2, '0');
const year = todaysDate.getFullYear();
todaysDate = `${year}-${month}-${day}`;

export const fetchCountriesFromApi = () => async (dispatch) => {
  const countries = await fetch(`https://api.covid19tracking.narrativa.com/api/${todaysDate}`);
  const response = await countries.json();
  if (response) {
    const { dates, total } = response;
    const regions = dates[`${todaysDate}`].countries;
    const countriesArr = Object.values(regions);
    const oneCountry = countriesArr.map((country) => (
      {
        name: country.name,
        confirmedCases: country.today_confirmed,
        id: country.id,
        allDeaths: country.today_deaths,
        allRegions: country.regions,
        recovered: country.today_recovered,
        openCases: country.today_open_cases,
      }
    ));
    const totalConfirmed = total.today_confirmed;
    const allData = { oneCountry, totalConfirmed };
    dispatch(fetchCountries(allData));
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
