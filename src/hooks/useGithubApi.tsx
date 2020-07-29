/**
 * Notes on GitHub authentication:
 * https://docs.github.com/en/rest/overview/resources-in-the-rest-api#increasing-the-unauthenticated-rate-limit-for-oauth-applications
 */

import { useEffect, useState } from 'react';

import authorizationHeader from '../../auth.json';
import { QueryResult } from 'types/QueryResult';

const headers = new Headers([
  ['Accept', 'application/vnd.github.v3+json'],
  ['Authorization', authorizationHeader],
]);

export function useGithubApi<Result>({
  url,
  enabled,
  processData,
}: {
  url: string;
  enabled?: any;
  processData?: (data: any) => Result;
}): QueryResult<Result> {
  const [queryResult, setQueryResult] = useState<QueryResult<Result>>(getInitialQueryResult);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    setQueryResult({ status: 'loading' });

    const controller = new AbortController();
    const { signal } = controller;

    async function fetchAndProcess(): Promise<void> {
      const response = await fetch(url, { headers, signal });

      if (!response.ok) {
        // At this point some logging could be used, eg. with Sentry
        setQueryResult({ status: 'error' });
        return;
      }

      const jsonData = await response.json();
      if (!signal.aborted) {
        setQueryResult((queryResult) => ({
          ...queryResult,
          status: 'success',
          data: processData ? processData(jsonData) : jsonData,
        }));
      }
    }

    fetchAndProcess();

    return (): void => {
      controller.abort();
    };
  }, [enabled, processData, url]);

  return queryResult;
}

function getInitialQueryResult<Result>(): QueryResult<Result> {
  return {
    status: 'idle',
  };
}
