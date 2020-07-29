/**
 * Notes:
 * https://docs.github.com/en/rest/reference/users#get-a-user
 */

import { useGithubApi } from 'hooks/useGithubApi';
import { QueryResult } from 'types/QueryResult';

interface RawUserInfoData {
  avatar_url: string;
  bio: string;
  name: string;
}

export interface UserInfoData {
  avatarUrl: string;
  description: string;
  name: string;
}

export function useGithubUserInfo(login: string | undefined): QueryResult<UserInfoData> {
  return useGithubApi({
    url: `https://api.github.com/users/${encodeURIComponent(String(login))}`,
    processData,
    enabled: login,
  });
}

function processData({ avatar_url, bio, name }: RawUserInfoData): UserInfoData {
  return {
    avatarUrl: avatar_url,
    description: bio,
    name,
  };
}
