export type TestUsername = 'basic';

export type TestMissingUsername = 'missing-user';

interface TestUserInfoData {
  avatar_url: string;
  bio: string;
  name: string;
}

interface TestUserRepositoryData {
  html_url: string;
  name: string;
  stargazers_count: number;
}

interface TestUserData extends TestUserInfoData {
  repos: TestUserRepositoryData[];
}

export const testUsers = new Map<TestUsername, TestUserData>([
  [
    'basic',
    {
      avatar_url: 'https://placehold.it/128x128',
      bio: 'A bio of a basic user',
      name: 'Foo Bar',
      repos: [
        {
          html_url: 'https://github.com/facebook/react',
          name: 'react',
          stargazers_count: 153000,
        },
        {
          html_url: 'https://github.com/noname/homepage',
          name: 'homepage',
          stargazers_count: 0,
        },
        {
          html_url: 'https://github.com/eslint/eslint',
          name: 'eslint',
          stargazers_count: 16900,
        },
        {
          html_url: 'https://github.com/microsoft/typescript',
          name: 'TypeScript',
          stargazers_count: 62600,
        },
      ],
    },
  ],
]);
