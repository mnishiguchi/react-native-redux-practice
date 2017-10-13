import { SELECT_PROJECT } from '../constants';

const initialState = '';

// Currently selected project's uid.
const selectedProject = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PROJECT:
      return action.uid;

    default:
      return state;
  }
};

export default selectedProject;
