/**
 * Notes on GitHub authentication:
 * https://docs.github.com/en/rest/overview/resources-in-the-rest-api#increasing-the-unauthenticated-rate-limit-for-oauth-applications
 */

import { RecoilValue, RecoilValueReadOnly, selector } from 'recoil';

import authorizationHeader from '../../auth.json';

const headers = new Headers([
  ['Accept', 'application/vnd.github.v3+json'],
  ['Authorization', authorizationHeader],
]);

export function getGithubApiSelector<Result>({
  key,
  urlValue,
  processData,
}: {
  key: string;
  urlValue: RecoilValue<string | undefined>;
  processData?: (data: any) => Result;
}): RecoilValueReadOnly<Result | undefined> {
  return selector({
    key: `get-github-api/${key}-selector`,
    get: ({ get }) => {
      const url = get(urlValue);
      if (url) {
        return fetchAndProcess(url, processData);
      }
    },
  });
}

async function fetchAndProcess<Result>(
  url: string,
  processData?: (data: any) => Result,
): Promise<Result> {
  const response = await fetch(url, { headers });

  if (!response.ok) {
    // At this point some logging could be used, eg. with Sentry
    throw Object.assign(new Error(response.statusText), { response });
  }

  const jsonData = await response.json();
  return processData ? processData(jsonData) : jsonData;
}
