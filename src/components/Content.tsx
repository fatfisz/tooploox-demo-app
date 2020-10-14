import { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';

import { ContentErrorBoundary } from './ContentErrorBoundary';
import { Login } from './Login';
import { SafeSuspense } from './SafeSuspense';
import { WhitespaceToBr } from './WhitespaceToBr';

import { githubUserInfoSelector } from 'data/githubUserInfo';
import { githubUserRepositoriesSelector, UserRepositoryData } from 'data/githubUserRepositories';
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

export function Content(): ReactElement | null {
  return (
    <Box padding="medium">
      <ContentBlock>
        <ContentErrorBoundary ErrorComponent={ContentError}>
          <Stack space="large">
            <SafeSuspense fallback={<Loader />}>
              <UserInfo />
              <SafeSuspense fallback={<Loader />}>
                <UserRepositories />
              </SafeSuspense>
            </SafeSuspense>
          </Stack>
        </ContentErrorBoundary>
      </ContentBlock>
    </Box>
  );
}

function ContentError({ error }: { error?: any }): ReactElement {
  if (error.response?.status === 404) {
    return (
      <Heading align="center" level={2}>
        User &quot;
        <Login />
        &quot; could not be found 😔
        <br />
        Try some other username, eg. &quot;kentcdodds&quot;
      </Heading>
    );
  }
  return (
    <Heading align="center" level={2}>
      An error occurred while retrieving the profile
    </Heading>
  );
}

function UserInfo(): ReactElement {
  const userInfo = useRecoilValue(githubUserInfoSelector);
  if (!userInfo) {
    return (
      <Heading align="center" level={2}>
        Type a username and click &quot;Search&quot; to get information{' '}
        <NoBreak>about a GitHub user</NoBreak>
      </Heading>
    );
  }
  return (
    <Stack space="medium">
      <Columns alignY="bottom" space="small">
        <Column width="content">
          <Image alt="user avatar" borderRadius="large" size="avatar" src={userInfo.avatarUrl} />
        </Column>
        <Column>
          <Heading level={1}>
            <WhitespaceToBr>{userInfo.name}</WhitespaceToBr>
          </Heading>
        </Column>
      </Columns>
      {userInfo.description && <Text data-testid="description">{userInfo.description}</Text>}
    </Stack>
  );
}

function UserRepositories(): ReactElement | null {
  const repositories = useRecoilValue(githubUserRepositoriesSelector);
  if (!repositories) {
    return null;
  }
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
