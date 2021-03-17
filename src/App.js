import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Input from "./components/Input";
import View from "./components/View";
import StateController from "./components/StateController";

StateController.init({ userInput: "sed" });

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					<Input />
				</p>
				<View />
			</header>
		</div>
	);
}

export default App;
