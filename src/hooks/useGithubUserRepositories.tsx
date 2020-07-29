/**
 * Notes:
 * https://docs.github.com/en/rest/reference/repos#list-repositories-for-a-user
 *
 * The requirement was to return up to 3 most popular repos, but there is
 * a caveat. There's no option to sort by the number of stars, so in some
 * extreme cases (when a user has hundreds of repos) many requests would have
 * to have been made in order to sort the repos on the client side. That's why
 * in the end only one request is made to get the 100 most recently updated
 * repos, and then the most popular ones are picked among them.
 */

import { useGithubApi } from 'hooks/useGithubApi';
import { QueryResult } from 'types/QueryResult';

type RawUserRepositoriesData = {
  html_url: string;
  name: string;
  stargazers_count: number;
}[];

export interface UserRepositoryData {
  name: string;
  url: string;
}

export type UserRepositoriesData = UserRepositoryData[];

const queryParams = new URLSearchParams({
  per_page: '100',
  sort: 'updated',
});

export function useGithubUserRepositories(
  login: string | undefined,
): QueryResult<UserRepositoriesData> {
  return useGithubApi({
    url: `https://api.github.com/users/${encodeURIComponent(login as string)}/repos?${queryParams}`,
    processData,
    enabled: login,
  });
}

function processData(repositories: RawUserRepositoriesData): UserRepositoriesData {
  return repositories
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 3)
    .map(({ html_url, name }) => ({
      name,
      url: html_url,
    }));
}
