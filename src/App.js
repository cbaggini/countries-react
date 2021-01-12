import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import CountryView from './CountryView';
import DetailView from './DetailView';


function App() {
	
	return (
		<Router>
			<header>
				<div className="title">
					Where in the world?
				</div>
			</header>
			<Switch>
				<Route exact path='/'>
					<CountryView />
				</Route>
					<Route path='/country/:id' children={<DetailView />}>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
