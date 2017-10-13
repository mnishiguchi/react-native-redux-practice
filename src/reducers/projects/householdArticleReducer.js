import {
  CREATE_PROJECT_HOUSEHOLD_ARTICLE,
  UPDATE_PROJECT_HOUSEHOLD_ARTICLE,
} from '../../constants';

const initialState = {
  uid: '',
  name: '',
  volume: 0,
  quantity: 1,
  tag: '',
  description: '',
};

const householdArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT_HOUSEHOLD_ARTICLE:
      return {
        ...state,
        ...action.householdArticle,
        uid: action.uid,
      };

    case UPDATE_PROJECT_HOUSEHOLD_ARTICLE:
      return {
        ...state,
        ...action.householdArticle,
        uid: action.uid,
      };

    default:
      return state;
  }
};

export default householdArticleReducer;
