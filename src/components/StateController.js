console.log("--Initializing state controller, this wll be printed just once.");

const state = {};
const subscriptions = {};

const StateController = {
	init: (accState = {}) => Object.assign(state, accState),

	get: key => state[key],

	set: (key, value) => {
		state[key] = value;
	}
};

export const subscribe = (key, callback) => {
	if (!key || !(callback instanceof Function)) return;

	let subscriptionSet = subscriptions[key];

	if (!subscriptionSet) {
		subscriptionSet = new Set();
		subscriptions[key] = subscriptionSet;
	}

	subscriptionSet.add(callback);
	callback(state[key]);
};

export const unsubscribe = (key, callback) => {
	if (!key || !(callback instanceof Function)) return;

	const subscriptionSet = subscriptions[key];
	if (!subscriptionSet) return;

	subscriptionSet.delete(callback);
	if (subscriptionSet.size === 0) {
		delete subscriptions[key];
	}

	callback(undefined);
};

export const dispatch = (key, value) => {
	if (value === state[key]) return;
	state[key] = value;

	if (!subscriptions[key]) return;
	subscriptions[key].forEach(subscription => subscription(value));
};

export default StateController;
