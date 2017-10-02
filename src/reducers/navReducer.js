import React from 'react';
import AppNavigator from '../AppNavigator';

// https://reactnavigation.org/docs/guides/redux
const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Home')
);

const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default navReducer;
