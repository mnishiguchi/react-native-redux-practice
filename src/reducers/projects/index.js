import shortid from 'shortid';
import _ from 'lodash';
import {
  CREATE_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  CREATE_PROJECT_HOUSEHOLD_ARTICLE,
  UPDATE_PROJECT_HOUSEHOLD_ARTICLE,
  DELETE_PROJECT_HOUSEHOLD_ARTICLE,
} from '../../constants';
import projectReducer from './projectReducer';

// Temporary fake data. We will use real data with redux-persist down the line.
import projects from '../../data/projects';

const initialState = projects || {};

// All the projects
const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      const newProjectId = shortid.generate();
      return {
        ...state,
        [newProjectId]: projectReducer(null, {
          project: action.project,
          uid: newProjectId,
        }),
      };

    case UPDATE_PROJECT:
      return {
        ...state,
        [action.uid]: projectReducer(state[action.uid], {
          project: action.project,
          uid: action.uid,
        }),
      };

    case DELETE_PROJECT:
      return _.omit(state, [action.uid]);

    case CREATE_PROJECT_HOUSEHOLD_ARTICLE:
      return {
        ...state,
        [action.uid]: projectReducer(state[action.uid], {
          householdArticle: action.householdArticle,
        }),
      };

    case UPDATE_PROJECT_HOUSEHOLD_ARTICLE:
      return {
        ...state,
        [action.uid]: projectReducer(state[action.uid], {
          householdArticleId: action.householdArticleId,
          householdArticle: action.householdArticle,
        }),
      };

    case DELETE_PROJECT_HOUSEHOLD_ARTICLE:
      return {
        ...state,
        [action.uid]: projectReducer(state[action.uid], {
          householdArticleId: action.householdArticleId,
        }),
      };

    default:
      return state;
  }
};

export default projectsReducer;
