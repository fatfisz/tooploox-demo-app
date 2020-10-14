/**
 * Notes:
 * https://docs.github.com/en/rest/reference/users#get-a-user
 */

import { selector } from 'recoil';

import { loginAtom } from './login';

import { getGithubApiSelector } from 'data/githubApi';

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

const urlSelector = selector({
  key: 'github-user-info-url-selector',
  get: ({ get }) => {
    const login = get(loginAtom);
    return login ? `https://api.github.com/users/${encodeURIComponent(String(login))}` : undefined;
  },
});

export const githubUserInfoSelector = getGithubApiSelector({
  key: 'github-user-info-selector',
  urlValue: urlSelector,
  processData,
});

function processData({ avatar_url, bio, name }: RawUserInfoData): UserInfoData {
  return {
    avatarUrl: avatar_url,
    description: bio,
    name,
  };
}
