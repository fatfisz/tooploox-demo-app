import { ReactElement } from 'react';

import {
  Box,
  Column,
  Columns,
  ContentBlock,
  Heading,
  Image,
  Link,
  Loader,
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
import { QueryResult } from 'types/QueryResult';

export function Content({ login }: { login: string | undefined }): ReactElement {
  const userInfo = useGithubUserInfo(login);
  const repositories = useGithubUserRepositories(login);
  return (
    <Box padding="medium">
      <ContentBlock>
        <ContentBody userInfo={userInfo} repositories={repositories} />
      </ContentBlock>
    </Box>
  );
}

function ContentBody({
  repositories,
  userInfo,
}: {
  repositories: QueryResult<UserRepositoriesData>;
  userInfo: QueryResult<UserInfoData>;
}): ReactElement {
  if (userInfo.status === 'error' || repositories.status === 'error') {
    return (
      <Heading align="center" level={2}>
        An error occurred while retrieving the profile
      </Heading>
    );
  }
  if (userInfo.status === 'idle' || repositories.status === 'idle') {
    return (
      <Heading align="center" level={2}>
        Type a username and click &quot;Search&quot; to get information{' '}
        <NoBreak>about a GitHub user</NoBreak>
      </Heading>
    );
  }
  if (userInfo.status === 'loading') {
    return <Loader />;
  }
  return (
    <Stack space="large">
      <UserInfo {...userInfo.data!} />
      {repositories.status === 'loading' ? (
        <Loader />
      ) : (
        <UserRepositories repositories={repositories.data!} />
      )}
    </Stack>
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
      {description && <Text data-testid="description">{description}</Text>}
    </Stack>
  );
}

function UserRepositories({ repositories }: { repositories: UserRepositoriesData }): ReactElement {
  if (repositories.length === 0) {
    return <Heading level={2}>No repositories found for this user</Heading>;
  }
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
