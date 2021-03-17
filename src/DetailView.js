import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import countries from "./data/countriesAll.json";

const DetailView = ({ isLight }) => {
  const [country, setCountry] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const newCountry = countries.find((country) => country.alpha3Code === id);
    setCountry(newCountry);
  }, [id]);

  return (
    <>
      <Link to="/">
        <button className={isLight ? "backButton" : "darkBackButton"}>
          &larr; &nbsp; Back
        </button>
      </Link>
      {country && (
        <section className="detailMain">
          <figure className="detailFigure">
            <img
              className="detailFlag"
              src={country.flag}
              alt={country.name}
            ></img>
          </figure>
          <article className="mainInfo">
            <h2>{country.name}</h2>
            <div className="detailContainer">
              <div>
                <p>
                  <strong>Native name: </strong>
                  {country.nativeName}
                </p>
                <p>
                  <strong>Population: </strong>
                  {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
                <p>
                  <strong>Region: </strong>
                  {country.region}
                </p>
                <p>
                  <strong>Subregion: </strong>
                  {country.subregion}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {country.capital}
                </p>
              </div>
              <div>
                <p>
                  <strong>Top Level Domain: </strong>
                  {country.topLevelDomain}
                </p>
                <p>
                  <strong>Currencies: </strong>
                  {country.currencies.map((el) => el.name).join(" - ")}
                </p>
                <p>
                  <strong>Languages: </strong>
                  {country.languages.map((el) => el.name).join(", ")}
                </p>
              </div>
            </div>
            <p className="borders">
              <p><strong>Border countries: </strong></p>
              {country.borders.map((el) => (
                <Link
                  key={countries.find((country) => country.alpha3Code === el).alpha3Code}
                  to={`/country/${countries.find((country) => country.alpha3Code === el).alpha3Code}`}
                >
                  <p className="bordering">{countries.find((country) => country.alpha3Code === el).name}</p>
                </Link>
              ))}
            </p>
          </article>
        </section>
      )}
    </>
  );
};

export default DetailView;
