// https://github.com/reactjs/reselect#createselectorinputselectors--inputselectors-resultfunc
// import { createSelector } from 'reselect';

// Get the household articles of a project by project uid.
export function projectHouseholdArticlesSelector(project = {}) {
  return project.householdArticles;
}

// Get a household article by project uid and household article uid.
export function projectHouseholdArticleSelector(project, householdArticleId) {
  const householdArticles = projectHouseholdArticlesSelector(project);

  return householdArticles[householdArticleId];
}

// Get the sum of all the household articles of the specified project.
export function projectTotalVolumeSelector(project) {
  return Object.values(project.householdArticles).reduce(
    (total, article) => total + Number(article.volume),
    0,
  );
}
