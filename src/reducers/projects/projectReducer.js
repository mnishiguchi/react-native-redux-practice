import shortid from 'shortid';
import {
  CREATE_PROJECT,
  UPDATE_PROJECT,
  CREATE_PROJECT_HOUSEHOLD_ARTICLE,
  UPDATE_PROJECT_HOUSEHOLD_ARTICLE,
  DELETE_PROJECT_HOUSEHOLD_ARTICLE,
} from '../../constants';
import householdArticlesReducer from './householdArticlesReducer';

const initialState = {
  uid: '',
  name: '',
  description: '',
  householdArticles: {},
};

// Each project
const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return {
        ...state,
        ...action.project,
        uid: action.uid,
      };

    case UPDATE_PROJECT:
      return {
        ...state,
        ...action.project,
        uid: action.uid,
      };

    case CREATE_PROJECT_HOUSEHOLD_ARTICLE:
      const newHouseholdArticleId = shortid.generate();
      return {
        ...state,
        householdArticles: householdArticlesReducer(state.householdArticles, {
          uid: newHouseholdArticleId,
          householdArticle: action.householdArticle,
        }),
      };

    case UPDATE_PROJECT_HOUSEHOLD_ARTICLE:
      return {
        ...state,
        householdArticles: householdArticlesReducer(state.householdArticles, {
          uid: action.householdArticleId,
          householdArticle: action.householdArticle,
        }),
      };

    case DELETE_PROJECT_HOUSEHOLD_ARTICLE:
      return {
        ...state,
        householdArticles: householdArticlesReducer(state.householdArticles, {
          uid: action.householdArticleId,
        }),
      };

    default:
      return state;
  }
};

export default projectReducer;
