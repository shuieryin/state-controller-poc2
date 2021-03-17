import StateController, { dispatch } from "./StateController";

// noinspection JSUnusedGlobalSymbols
export default {
	formatAndUpdateUserInput: () => {
		const userInput = StateController.get("userInput");
		if (!userInput) return;
		StateController.set(
			"userInput",
			userInput.replace(/\B(?=(\w{3})+(?!\w))/g, ",")
		);
	},

	formatAndDispatchUserInput: () => {
		const userInput = StateController.get("userInput");
		if (!userInput) return;
		dispatch("userInput", userInput.replace(/\B(?=(\w{3})+(?!\w))/g, ","));
	}
};
