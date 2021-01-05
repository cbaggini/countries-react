import React from 'react';

const CountryMain = (props) => {
	const {name, population, region, capital, flag} = props;
	return (
		<article className="countryMain">
			<figure className="mainFigure">
				<img className="mainFlag" src={flag} alt={name}></img>
			</figure>
			<div className="mainInfo">
				<h3>{name}</h3>
				<p><strong>Population: </strong>{population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
				<p><strong>Region: </strong>{region}</p>
				<p><strong>Capital: </strong>{capital}</p>
			</div>
		</article>
	);
}

export default CountryMain;