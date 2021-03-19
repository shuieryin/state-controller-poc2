import React, { useState, useEffect } from "react";
import { subscribe, unsubscribe } from "./StateController";
import PropTypes from "prop-types";

const Output = ({ name }) => {
	const [userInput, setUserInput] = useState();

	const subscribeClick = () => {
		subscribe("userInput", setUserInput);
	};

	const unsubscribeClick = () => {
		unsubscribe("userInput", setUserInput);
	};

	useEffect(() => {
		return () => {
			unsubscribe("userInput", setUserInput);
		};
	}, []);

	return (
		<label>
			{name}: {userInput}
			<button onClick={subscribeClick}>subscribe</button>
			<button onClick={unsubscribeClick}>unsubscribe</button>
		</label>
	);
};

Output.propTypes = {
	name: PropTypes.string
};

export default Output;
