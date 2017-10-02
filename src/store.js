import React from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import navReducer from './reducers/navReducer';

const reducer = combineReducers({
  nav: navReducer
});

// https://github.com/evgenyrodionov/redux-logger
export default createStore(reducer, applyMiddleware(logger));
