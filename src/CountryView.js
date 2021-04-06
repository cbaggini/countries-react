import React, { useState } from "react";

import countries from "./data/countriesAll.json";
import CountryMain from "./CountryMain";
import SearchBar from "./SearchBar";

const CountryView = ({ isLight }) => {
  const regions = [
    ...new Set(countries.map((el) => el.region).filter((el) => el.length > 1)),
  ];
  const [selectedRegions, setSelectedRegions] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((country) => {
    if (selectedRegions === "All") {
      return (
        country.name.toLowerCase().includes(search) ||
        country.capital.toLowerCase().includes(search)
      );
    } else {
      return (
        (country.name.toLowerCase().includes(search) ||
          country.capital.toLowerCase().includes(search)) &&
        selectedRegions.includes(country.region)
      );
    }
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
      </section>
    </>
  );
};

export default CountryView;
