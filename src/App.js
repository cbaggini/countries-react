import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import CountryView from './CountryView';
import DetailView from './DetailView';


function App() {

	const [isLight, setIsLight] = useState(true);

	const toggleColor = (e) => {
		setIsLight(!isLight);
		if (!isLight) {
			document.body.style = 'background: white;';
		} else {
			document.body.style = 'background: black;';
		}
		
	}
	
	return (
		<Router >
			<div className={isLight ? "rootLight" : "rootDark"}>
			<header>
				<div className="title">
					Where in the world?
				</div>
				<button className="dark" onClick={toggleColor}><i class="fa fa-moon-o" style={{fontSize: "18px"}}></i>  Dark mode</button>
			</header>
			<Switch>
				<Route exact path='/'>
					<CountryView isLight={isLight}/>
				</Route>
					<Route path='/country/:id' children={<DetailView isLight={isLight} />}>
				</Route>
			</Switch>
			</div>
		</Router>
	);
}

export default App;
