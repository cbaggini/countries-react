import React from "react";

const SearchBar = ({ regions, setSelectedRegions, setSearch, isLight }) => {
  const toggleRegions = (e) => {
    setSelectedRegions(e.target.value);
  };

  const filterCountries = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  return (
    <nav className="filters">
      <div className={isLight ? "search" : "searchDark"}>
        <i
          className="fa fa-search"
          aria-hidden="true"
          style={{ color: "lightgrey" }}
        ></i>
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={filterCountries}
        ></input>
      </div>
      <select
        className={isLight ? "regions" : "regionsDark"}
        onChange={toggleRegions}
      >
        <option value="">Filter By Region</option>
        {regions.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default SearchBar;
