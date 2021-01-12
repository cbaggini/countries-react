import React from 'react';
import { Link } from 'react-router-dom';

const CountryMain = (props) => {
	const {name, population, region, capital, flag, alpha3Code, isLight} = props;
	return (
		<article className={isLight ? "countryMain" : "countryMainDark"}>
			<Link to={`/country/${alpha3Code}`}>
			<figure className="mainFigure">
				<img className="mainFlag" src={flag} alt={name}></img>
			</figure>
			</Link>
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