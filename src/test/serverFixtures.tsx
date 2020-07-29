export type TestUsername = 'basic' | 'one-repo' | 'no-repos' | 'missing-bio';

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

class Repository implements TestUserRepositoryData {
  html_url: string;
  name: string;
  stargazers_count: number;

  static generateRepositories(username: TestUsername, repoInfo: [string, number][]): Repository[] {
    return repoInfo.map(
      ([name, stargazersCount]) => new Repository(username, name, stargazersCount),
    );
  }

  constructor(username: string, name: string, stargazersCount: number) {
    this.html_url = `https://github.com/${username}/${name}`;
    this.name = name;
    this.stargazers_count = stargazersCount;
  }
}

export const testUsers = new Map<TestUsername, TestUserData>([
  [
    'basic',
    {
      avatar_url: 'https://placehold.it/128x128',
      bio: 'A bio of a basic user',
      name: 'Foo Bar',
      repos: Repository.generateRepositories('basic', [
        ['fifth', 1000],
        ['second', 4000],
        ['fourth', 2000],
        ['first', 5000],
        ['third', 3000],
      ]),
    },
  ],
  [
    'one-repo',
    {
      avatar_url: 'https://placehold.it/128x128',
      bio: 'A bio of a user with only one repository',
      name: 'Foo Bar',
      repos: Repository.generateRepositories('one-repo', [['only', 1000]]),
    },
  ],
  [
    'no-repos',
    {
      avatar_url: 'https://placehold.it/128x128',
      bio: 'A bio of a user with no repositories',
      name: 'Foo Bar',
      repos: [],
    },
  ],
  [
    'missing-bio',
    {
      avatar_url: 'https://placehold.it/128x128',
      bio: '',
      name: 'Foo Bar',
      repos: Repository.generateRepositories('missing-bio', [
        ['fifth', 1000],
        ['second', 4000],
        ['fourth', 2000],
        ['first', 5000],
        ['third', 3000],
      ]),
    },
  ],
]);
