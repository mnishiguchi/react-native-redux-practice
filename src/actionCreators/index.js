import {
  CREATE_PROJECT,
  UPDATE_PROJECT,
  DELETE_PROJECT,
  CREATE_PROJECT_HOUSEHOLD_ARTICLE,
  UPDATE_PROJECT_HOUSEHOLD_ARTICLE,
  DELETE_PROJECT_HOUSEHOLD_ARTICLE,
} from '../../constants';

export function createProject(project) {
  return {
    type: CREATE_PROJECT,
    project,
  };
}

export function updateProject(uid, project) {
  return {
    type: UPDATE_PROJECT,
    uid,
    project,
  };
}

export function deleteProject(uid) {
  return {
    type: DELETE_PROJECT,
    uid,
  };
}

export function createProjectHouseholdArticle(uid, householdArticle) {
  return {
    type: CREATE_PROJECT_HOUSEHOLD_ARTICLE,
    uid,
    householdArticle,
  };
}

export function updateProjectHouseholdArticle(uid, householdArticleId, householdArticle) {
  return {
    type: UPDATE_PROJECT_HOUSEHOLD_ARTICLE,
    uid,
    householdArticleId,
    householdArticle,
  };
}

export function deleteProjectHouseholdArticle(uid, householdArticleId) {
  return {
    type: DELETE_PROJECT_HOUSEHOLD_ARTICLE,
    uid,
    householdArticleId,
  };
}
