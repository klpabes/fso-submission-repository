import axios from "axios";
const baseUrlInfo = "https://studies.cs.helsinki.fi/restcountries/api/name";
const baseUrlCountries = "https://studies.cs.helsinki.fi/restcountries/api/all";
const api_key = import.meta.env.VITE_SOME_KEY;

const getAllCountries = () => {
  const request = axios.get(baseUrlCountries);
  return request;
};

const getCountryInfo = (name) => {
  const request = axios.get(`${baseUrlInfo}/${name}`);
  return request.then((response) => response.data);
};

const getCountryWeather = (capital) => {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`
  );
  return request.then((response) => response.data);
};

export default {
  getCountryInfo,
  getAllCountries,
  getCountryWeather,
};
