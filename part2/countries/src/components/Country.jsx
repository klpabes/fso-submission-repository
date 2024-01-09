import CountryInfo from "./CountryInfo";

const Country = ({ countries, setSearchCountry }) => {
  if (countries == null) return;
  if (countries.length === 1) {
    const [{ name }] = countries;
    return (
      <div>
        <CountryInfo name={name} />
      </div>
    );
  } else if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else {
    return (
      <ul>
        {countries.map((country) => (
          <div key={country.id}>
            {country.name}
            <button
              value={country.name}
              onClick={(e) => {
                setSearchCountry(e.target.value);
              }}
            >
              show
            </button>
          </div>
        ))}
      </ul>
    );
  }
};

export default Country;
