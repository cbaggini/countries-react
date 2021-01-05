import './App.css';
import countries from './data/countriesAll.json';
import CountryMain from './CountryMain'

function App() {
  return (
  	<>
      <header>
		  <div className="title">
			  Where in the world?
		  </div>
	  </header>
	  <section className="countriesContainer">
		  {countries.map((country) => {
			  return (<CountryMain key={country.alpha3Code} {... country} />)
		  })}
	  </section>
    </>
  );
}

export default App;
