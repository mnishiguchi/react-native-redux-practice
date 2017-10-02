import React from 'react';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import nav from './reducers/nav';
import projects from './reducers/projects';
import selectedProject from './reducers/selectedProject';

const reducer = combineReducers({
  nav,
  projects,
  selectedProject,
});

// https://github.com/evgenyrodionov/redux-logger
export default createStore(reducer, applyMiddleware(logger));
