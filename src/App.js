import React, {useState} from "react";
import './App.css';
import countries from './data/countriesAll.json';
import CountryMain from './CountryMain';
import SearchBar from './SearchBar';

function App() {
	const [filteredCountries, setFilteredCountries] = useState(countries);

	const filterCountries = (e) => {
		if (e.target.value) {
			const newCountries = countries.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()) || el.capital.toLowerCase().includes(e.target.value.toLowerCase()))
			setFilteredCountries(newCountries);
		} else {
			setFilteredCountries(countries);
		}	
	}
	return (
		<>
		<header>
			<div className="title">
				Where in the world?
			</div>
			<div>
				<SearchBar filterCountries={filterCountries} />
			</div>
		</header>
		<section className="countriesContainer">
			{filteredCountries.map((country) => {
				return (<CountryMain key={country.alpha3Code} {... country} />)
			})}
		</section>
		</>
	);
}

export default App;
