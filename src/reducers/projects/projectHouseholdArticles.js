import _ from 'lodash';
import {
  CREATE_PROJECT_HOUSEHOLD_ARTICLE,
  UPDATE_PROJECT_HOUSEHOLD_ARTICLE,
  DELETE_PROJECT_HOUSEHOLD_ARTICLE,
} from '../../constants';

const initialState = {
  uid: '',
  name: '',
  volume: 0,
  quantity: 1,
  tag: '',
  description: '',
};

// Each project's household articles
const projectHouseholdArticles = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT_HOUSEHOLD_ARTICLE:
      return {
        ...state,
        [action.uid]: {
          ...action.householdArticle,
          uid: action.uid,
        },
      };

    case UPDATE_PROJECT_HOUSEHOLD_ARTICLE:
      return {
        ...state,
        [action.uid]: {
          ...action.householdArticle,
          uid: action.uid,
        },
      };

    case DELETE_PROJECT_HOUSEHOLD_ARTICLE:
      return _.omit(action.project.householdArticles, [action.uid]);

    default:
      return state;
  }
};

export default projectHouseholdArticles;
