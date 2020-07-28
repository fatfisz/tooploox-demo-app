import { useEffect, useState } from 'react';

export interface UserRepositoryData {
  name: string;
  url: string;
}

export type UserRepositoriesData = UserRepositoryData[];

export function useGithubUserRepositories(
  login: string | undefined,
): UserRepositoriesData | undefined {
  const [data, setData] = useState<UserRepositoriesData>();

  useEffect(() => {
    const handle = setTimeout(() => {
      setData([
        { name: 'react', url: 'https://github.com/facebook/react' },
        { name: 'TypeScript', url: 'https://github.com/microsoft/typescript' },
        { name: 'eslint', url: 'https://github.com/eslint/eslint' },
        { name: String(login), url: 'https://github.com' },
      ]);
    }, 1000);

    return (): void => {
      clearTimeout(handle);
    };
  }, [login]);

  return data;
}
