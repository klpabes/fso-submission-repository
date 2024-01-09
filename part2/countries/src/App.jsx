import { useState, useEffect } from "react";
import countryService from "./services/countries";
import Country from "./components/Country";

function App() {
  const [countries, setCountry] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    countryService.getAllCountries().then((response) => {
      const countryNames = response.data.map((country, i) => {
        const countryObject = { name: country.name.common, id: i + 1 };
        return countryObject;
      });
      setCountry(countryNames);
    });
  }, []);

  const countryShow = searchCountry
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(searchCountry.toLowerCase())
      )
    : null;

  const handleCountryChange = (event) => {
    setSearchCountry(event.target.value);
  };

  return (
    <div>
      find countries
      <input value={searchCountry} onChange={handleCountryChange}></input>
      <Country countries={countryShow} setSearchCountry={setSearchCountry} />
    </div>
  );
}

export default App;
