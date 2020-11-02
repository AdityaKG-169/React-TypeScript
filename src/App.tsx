import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import WriteForUs from "./Pages/WriteForUs/WriteForUs";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Switch>
				<Route component={WriteForUs} path="/write" />
			</Switch>
		</div>
	);
}

export default App;
