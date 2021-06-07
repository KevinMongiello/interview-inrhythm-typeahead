import axios from 'axios';

export const COUNTRIES_RECEIVED =  'COUNTRIES_RECEIVED';

export const getCountries = () => async (dispatch) => {
  const url = `/api/countries.json`;
  const response = await axios.get(url);
  debugger;
  dispatch({ type: COUNTRIES_RECEIVED, data: response.data});
}
