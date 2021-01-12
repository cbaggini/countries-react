import React, {useState} from "react";

import countries from './data/countriesAll.json';
import CountryMain from './CountryMain';
import SearchBar from './SearchBar';

const CountryView = ({isLight}) => {
	const [filteredCountries, setFilteredCountries] = useState(countries);
	const regions = [...new Set(countries.map(el => el.region).filter(el => el.length > 1))];
	const [selectedRegions, setSelectedRegions] = useState(regions);
	const [search, setSearch] = useState('');

	const filterCountries = (e) => {
		if (e.target.value) {
			const newCountries = countries.filter(el => (el.name.toLowerCase().includes(e.target.value.toLowerCase()) || el.capital.toLowerCase().includes(e.target.value.toLowerCase())) && selectedRegions.includes(el.region));
			setFilteredCountries(newCountries);
			setSearch(e.target.value);
		} else {
			const newCountries = countries.filter(el => selectedRegions.includes(el.region))
			setFilteredCountries(newCountries);
			setSearch('');
		}	
	}

	return (
		<>
		<SearchBar isLight={isLight} filterCountries={filterCountries} regions={regions} setSelectedRegions={setSelectedRegions} search={search} setFilteredCountries={setFilteredCountries}/>
		<section className="countriesContainer">
			{filteredCountries.map((country) => {
				return (<CountryMain key={country.alpha3Code} {... country} isLight={isLight}/>)
			})}
		</section>
		</>
	);
}

export default CountryView;