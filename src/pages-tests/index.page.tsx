import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TestUsername } from 'test/serverFixtures';

export function expectEmptyState(): void {
  expect(screen.queryAllByRole('heading')).toHaveLength(1);
  expect(getSubHeading()).toHaveTextContent('Type a username');
  expect(screen.queryByTestId('loader')).toBeNull();
}

export function expectNotFoundErrorState(): void {
  expect(screen.queryAllByRole('heading')).toHaveLength(1);
  expect(getSubHeading()).toHaveTextContent('could not be found');
  expect(screen.queryByTestId('loader')).toBeNull();
}

export function expectServerErrorState(): void {
  expect(screen.queryAllByRole('heading')).toHaveLength(1);
  expect(getSubHeading()).toHaveTextContent('An error occurred');
  expect(screen.queryByTestId('loader')).toBeNull();
}

export function expectLoader(): void {
  expect(screen.queryByRole('heading')).toBeNull();
  expect(screen.queryAllByTestId('loader')).toHaveLength(1);
}

export function expectUserName(name: string): void {
  expect(getMainHeading()).toHaveTextContent(name.replace(/\s/g, ''));
}

export function expectDescription(description: string): void {
  expect(screen.getByTestId('description')).toHaveTextContent(description);
}

export function expectNoDescription(): void {
  expect(screen.queryByTestId('description')).toBeNull();
}

export function expectTopRepositories(repositories: { name: string; url: string }[]): void {
  expect(getSubHeading()).toHaveTextContent('Top repositories');
  expect(getLinks()).toEqual(repositories);
}

export function expectNoRepositories(): void {
  expect(getSubHeading()).toHaveTextContent('No repositories found');
  expect(getLinks()).toEqual([]);
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

export function typeUsernameAndSubmit(username: TestUsername): void {
  userEvent.type(screen.getByRole('textbox'), username);
  userEvent.click(screen.getByRole('button'));
}
