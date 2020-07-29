import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Index from '../../pages/index';

it('initially displays a textbox, a submit button, and an empty state message', () => {
  render(<Index />);

  expect(screen.queryAllByRole('textbox')).toHaveLength(1);
  expect(screen.queryAllByRole('button')).toHaveLength(1);
  expectEmptyState();
});

it('displays the user profile after submitting the username', async () => {
  render(<Index />);
  userEvent.type(screen.getByRole('textbox'), 'foobar');
  userEvent.click(screen.getByRole('button'));

  expectEmptyState();

  await waitFor(() => {
    expect(getMainHeading()).toHaveTextContent('Brant Bront Brent');
    expectTopRepositories([
      { name: 'react', url: 'https://github.com/facebook/react' },
      { name: 'TypeScript', url: 'https://github.com/microsoft/typescript' },
      { name: 'eslint', url: 'https://github.com/eslint/eslint' },
    ]);
  });
});

function expectEmptyState(): void {
  expect(screen.queryAllByRole('heading')).toHaveLength(1);
  expect(getSubHeading()).toHaveTextContent('Type a username');
}

function expectTopRepositories(repositories: { name: string; url: string }[]): void {
  expect(getSubHeading()).toHaveTextContent('Top repositories');
  expect(getLinks()).toEqual(repositories);
}

function getMainHeading(): HTMLElement {
  const headings = screen.queryAllByRole('heading').filter((heading) => heading.tagName === 'H1');
  expect(headings).toHaveLength(1);
  return headings[0];
}

function getSubHeading(): HTMLElement {
  const headings = screen.queryAllByRole('heading').filter((heading) => heading.tagName === 'H2');
  expect(headings).toHaveLength(1);
  return headings[0];
}

function getLinks(): { name: string | null; url: string }[] {
  return (screen.queryAllByRole('link') as HTMLAnchorElement[]).map((link) => ({
    name: link.textContent,
    url: link.href,
  }));
}
