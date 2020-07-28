import { useEffect, useState } from 'react';

export interface UserInfoData {
  avatarUrl: string;
  description: string;
  name: string;
}

export function useGithubUserInfo(login: string | undefined): UserInfoData | undefined {
  const [data, setData] = useState<UserInfoData>();

  useEffect(() => {
    const handle = setTimeout(() => {
      setData({
        avatarUrl: 'https://placehold.it/128x128',
        description: "He's a good boy",
        name: login ? `Bront (${login})` : 'Bront',
      });
    }, 1000);

    return (): void => {
      clearTimeout(handle);
    };
  }, [login]);

  return data;
}
