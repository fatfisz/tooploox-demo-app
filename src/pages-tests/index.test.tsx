import { render, screen, waitFor } from '@testing-library/react';

import Index from '../../pages/index';
import {
  expectEmptyState,
  expectLoader,
  expectTopRepositories,
  getMainHeading,
  typeUsernameAndSubmit,
} from 'pages-tests/index.page';

it('initially displays a textbox, a submit button, and an empty state message', () => {
  render(<Index />);

  expect(screen.queryAllByRole('textbox')).toHaveLength(1);
  expect(screen.queryAllByRole('button')).toHaveLength(1);
  expectEmptyState();
});

it('displays the user profile after submitting the username', async () => {
  render(<Index />);
  typeUsernameAndSubmit('basic');

  expectEmptyState();

  await waitFor(() => {
    expectLoader();
  });

  await waitFor(() => {
    expect(getMainHeading()).toHaveTextContent('Foo Bar');
    expectTopRepositories([
      { name: 'react', url: 'https://github.com/facebook/react' },
      { name: 'TypeScript', url: 'https://github.com/microsoft/typescript' },
      { name: 'eslint', url: 'https://github.com/eslint/eslint' },
    ]);
  });
});
