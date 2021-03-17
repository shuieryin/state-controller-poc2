import React from "react";
import { dispatch } from "./StateController";

const onChange = e => {
	dispatch("userInput", e.target.value);
};

const Input = () => {
	return (
		<label>
			Input: <input type="text" onChange={onChange} />
		</label>
	);
};

export default Input;
