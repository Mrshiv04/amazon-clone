//setting up the data layer

import { createContext, useContext, useReducer } from 'react';

//this is Data Layer
export const StateContext = createContext();

//Build a provider to wrap the entire app to give access to the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

//this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
