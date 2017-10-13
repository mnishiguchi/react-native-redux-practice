import shortid from 'shortid';
import _ from 'lodash';
import {
  CREATE_PROJECT_HOUSEHOLD_ARTICLE,
  UPDATE_PROJECT_HOUSEHOLD_ARTICLE,
  DELETE_PROJECT_HOUSEHOLD_ARTICLE,
} from '../../constants';
import householdArticleReducer from './householdArticleReducer';

const initialState = {};

const householdArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT_HOUSEHOLD_ARTICLE:
      const newHouseholdArticleId = shortid.generate();
      return {
        ...state,
        [newHouseholdArticleId]: householdArticleReducer(null, {
          householdArticle: action.householdArticle,
          uid: newProjectId,
        }),
      };

    case UPDATE_PROJECT_HOUSEHOLD_ARTICLE:
      return {
        ...state,
        [action.uid]: householdArticleReducer(state[action.uid], {
          householdArticle: action.householdArticle,
          uid: action.uid,
        }),
      };

    case DELETE_PROJECT_HOUSEHOLD_ARTICLE:
      return _.omit(...state, [action.uid]);

    default:
      return state;
  }
};

export default householdArticlesReducer;
