// https://github.com/reactjs/reselect#createselectorinputselectors--inputselectors-resultfunc
import { createSelector } from 'reselect';

// Get a project by uid.
export function projectSelector(projects, uid) {
  return projects[uid];
}

// Get the household articles of a project by project uid.
export function projectHouseholdArticlesSelector(projects, uid) {
  const project = projectSelector(projects, uid);

  return project && project.householdArticles;
}

// Get a household article by project uid and household article uid.
export function projectHouseholdArticleSelector(projects, uid, householdArticleId) {
  const householdArticles = projectHouseholdArticlesSelector(projects, uid);

  return householdArticles[householdArticleId];
}
