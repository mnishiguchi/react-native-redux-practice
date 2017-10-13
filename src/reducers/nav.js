import AppNavigator from '../AppNavigator';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams(AppNavigator.initialPath)
);

// https://reactnavigation.org/docs/guides/redux
const navReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  
  return nextState || state;
};

export default navReducer;
