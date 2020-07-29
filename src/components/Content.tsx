import { ReactElement } from 'react';

import {
  Box,
  Column,
  Columns,
  ContentBlock,
  Heading,
  Image,
  Link,
  NoBreak,
  Stack,
  Text,
} from 'design-system';
import { useGithubUserInfo, UserInfoData } from 'hooks/useGithubUserInfo';
import {
  useGithubUserRepositories,
  UserRepositoriesData,
  UserRepositoryData,
} from 'hooks/useGithubUserRepositories';

export function Content({ login }: { login: string | undefined }): ReactElement {
  const userInfo = useGithubUserInfo(login);
  const repositories = useGithubUserRepositories(login);
  return (
    <Box padding="medium">
      <ContentBlock>
        {userInfo.data ? (
          <Stack space="large">
            <UserInfo {...userInfo.data} />
            {repositories.data && <UserRepositories repositories={repositories.data} />}
          </Stack>
        ) : (
          <Heading align="center" level={2}>
            Type a username and click &quot;Search&quot; to get information{' '}
            <NoBreak>about a GitHub user</NoBreak>
          </Heading>
        )}
      </ContentBlock>
    </Box>
  );
}

function UserInfo({ avatarUrl, description, name }: UserInfoData): ReactElement | null {
  return (
    <Stack space="medium">
      <Columns alignY="bottom" space="small">
        <Column width="content">
          <Image alt="user avatar" borderRadius="large" size="avatar" src={avatarUrl} />
        </Column>
        <Column>
          <Heading level={1}>{name}</Heading>
        </Column>
      </Columns>
      {description && <Text>{description}</Text>}
    </Stack>
  );
}

function UserRepositories({ repositories }: { repositories: UserRepositoriesData }): ReactElement {
  return (
    <Stack space="medium">
      <Heading level={2}>Top repositories</Heading>
      <Stack space="small">
        {repositories.map(({ name, url }) => (
          <Repository key={url} name={name} url={url} />
        ))}
      </Stack>
    </Stack>
  );
}

function Repository({ name, url }: UserRepositoryData): ReactElement {
  return (
    <Link url={url}>
      <Box background="panelBackground" borderRadius="large" padding="small" shadow="basic">
        {name}
      </Box>
    </Link>
  );
}
