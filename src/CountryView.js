import React, { useState } from "react";

import countries from "./data/countriesAll.json";
import CountryMain from "./CountryMain";
import SearchBar from "./SearchBar";

const CountryView = ({ isLight }) => {
  const regions = [
    ...new Set(countries.map((el) => el.region).filter((el) => el.length > 1)),
  ];
  const [selectedRegions, setSelectedRegions] = useState("");
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((country) => {
    return (
      (country.name.toLowerCase().includes(search) ||
        country.capital.toLowerCase().includes(search)) &&
      country.region.includes(selectedRegions)
    );
  });

  return (
    <>
      <SearchBar
        isLight={isLight}
        regions={regions}
        setSelectedRegions={setSelectedRegions}
        setSearch={setSearch}
      />
      <section className="countriesContainer">
        {filteredCountries.map((country) => {
          return (
            <CountryMain
              key={country.alpha3Code}
              {...country}
              isLight={isLight}
            />
          );
        })}
        {filteredCountries.length === 0 && (
          <h3 className={isLight ? "countryMain" : "countryMainDark"}>
            No results found for your search
          </h3>
        )}
      </section>
    </>
  );
};

export default CountryView;
