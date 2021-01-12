import React from "react";

import countries from './data/countriesAll.json';

const SearchBar = ({filterCountries, regions, setSelectedRegions, search, setSearch, setFilteredCountries}) => {

	const toggleRegions = e => {
		//console.log(e.target.value);
		if (e.target.value) {
			setSelectedRegions([e.target.value]);
			const newCountries = countries.filter(el => (el.name.toLowerCase().includes(search.toLowerCase()) || el.capital.toLowerCase().includes(search.toLowerCase())) && el.region === e.target.value);
			//console.log(newCountries)
			setFilteredCountries(newCountries);
		} else {
			setSelectedRegions(regions);
			const newCountries = countries.filter(el => el.name.toLowerCase().includes(search.toLowerCase()) || el.capital.toLowerCase().includes(search.toLowerCase()));
			setFilteredCountries(newCountries);
		}
		
	}

	return (
		<nav className="filters">
			<div className="search">
				<i className="fa fa-search" aria-hidden="true" style={{color:"lightgrey"}}></i>
				<input type="text" placeholder="Search for a country..." onChange={filterCountries}></input>
			</div>
			<select id="regions" onChange={toggleRegions}>
				<option value="">Filter By Region</option>
				{regions.map(el => <option key={el} value={el}>{el}</option>)}
			</select>
		</nav>
	);
}

export default SearchBar;