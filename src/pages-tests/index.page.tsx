import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TestMissingUsername, TestUsername } from 'test/serverFixtures';

export function expectEmptyState(): void {
  expect(screen.queryAllByRole('heading')).toHaveLength(1);
  expect(getSubHeading()).toHaveTextContent('Type a username');
}

export function expectTopRepositories(repositories: { name: string; url: string }[]): void {
  expect(getSubHeading()).toHaveTextContent('Top repositories');
  expect(getLinks()).toEqual(repositories);
}

export function getMainHeading(): HTMLElement {
  const headings = screen.queryAllByRole('heading').filter((heading) => heading.tagName === 'H1');
  expect(headings).toHaveLength(1);
  return headings[0];
}

export function getSubHeading(): HTMLElement {
  const headings = screen.queryAllByRole('heading').filter((heading) => heading.tagName === 'H2');
  expect(headings).toHaveLength(1);
  return headings[0];
}

export function getLinks(): { name: string | null; url: string }[] {
  return (screen.queryAllByRole('link') as HTMLAnchorElement[]).map((link) => ({
    name: link.textContent,
    url: link.href,
  }));
}

export function typeUsernameAndSubmit(username: TestUsername | TestMissingUsername): void {
  userEvent.type(screen.getByRole('textbox'), username);
  userEvent.click(screen.getByRole('button'));
}
