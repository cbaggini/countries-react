import React from "react";

const SearchBar = ({filterCountries}) => {
	return (
		<div className="filters">
			<i className="fa fa-search" aria-hidden="true" style={{color:"lightgrey"}}></i>
			<input type="text" placeholder="Search for a country..." onChange={filterCountries}></input>
		</div>
	);
}

export default SearchBar;