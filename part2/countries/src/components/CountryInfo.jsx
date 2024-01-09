import countryService from "../services/countries";
import { useState, useEffect } from "react";

const CountryInfo = ({ name }) => {
  const [countryWeather, setCountryWeather] = useState(null);
  const [countryInfo, setCountryInfo] = useState(null);
  useEffect(() => {
    if (name) {
      countryService.getCountryInfo(name).then((data) => {
        const countryObject = data;
        setCountryInfo(countryObject);
      });
    }
    if (countryInfo) {
      countryService.getCountryWeather(countryInfo.capital).then((data) => {
        const weatherObject = data;
        setCountryWeather(weatherObject);
      });
    }
  }, [countryInfo]);

  if (countryInfo && countryWeather) {
    const icon = `https://openweathermap.org/img/wn/${countryWeather.weather[0].icon}@2x.png`;
    return (
      <div>
        <h1>{countryInfo.name.common}</h1>
        <p>capital {countryInfo.capital}</p>
        <p>area {countryInfo.area}</p>
        <h2>languages:</h2>
        <ul>
          {Object.values(countryInfo.languages).map((lang, i) => (
            <li key={i + 1}>{lang}</li>
          ))}
        </ul>
        <img src={countryInfo.flags.png} alt={countryInfo.flags.alt} />
        <h2>Weather in {countryInfo.capital}</h2>
        <p>temperature {(countryWeather.main.temp - 273.15).toFixed(2)}°C</p>
        <img src={icon} alt="" />
        <p>wind {countryWeather.wind.speed}m/s</p>
      </div>
    );
  }
  return;
};

export default CountryInfo;
