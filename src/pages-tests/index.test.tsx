import { render, screen, waitFor } from '@testing-library/react';

import Index from '../../pages/index';
import {
  expectDescription,
  expectEmptyState,
  expectLoader,
  expectNoDescription,
  expectNoRepositories,
  expectNotFoundErrorState,
  expectServerErrorState,
  expectTopRepositories,
  expectUserName,
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
    expectUserName('Foo Bar');
    expectDescription('A bio of a basic user');
    expectTopRepositories([
      { name: 'first', url: 'https://github.com/basic/first' },
      { name: 'second', url: 'https://github.com/basic/second' },
      { name: 'third', url: 'https://github.com/basic/third' },
    ]);
  });
});

describe('profile edge cases', () => {
  it('displays a user with only one repository', async () => {
    render(<Index />);
    typeUsernameAndSubmit('one-repo');

    await waitFor(() => {
      expectUserName('Foo Bar');
      expectDescription('A bio of a user with only one repository');
      expectTopRepositories([{ name: 'only', url: 'https://github.com/one-repo/only' }]);
    });
  });

  it('displays a user with no repositories', async () => {
    render(<Index />);
    typeUsernameAndSubmit('no-repos');

    await waitFor(() => {
      expectUserName('Foo Bar');
      expectDescription('A bio of a user with no repositories');
      expectNoRepositories();
    });
  });

  it('displays a user without a description', async () => {
    render(<Index />);
    typeUsernameAndSubmit('missing-bio');

    await waitFor(() => {
      expectUserName('Foo Bar');
      expectNoDescription();
      expectTopRepositories([
        { name: 'first', url: 'https://github.com/missing-bio/first' },
        { name: 'second', url: 'https://github.com/missing-bio/second' },
        { name: 'third', url: 'https://github.com/missing-bio/third' },
      ]);
    });
  });
});

it('displays an error message when the user does not exist', async () => {
  render(<Index />);
  typeUsernameAndSubmit('missing-user');

  expectEmptyState();

  await waitFor(() => {
    expectLoader();
  });

  await waitFor(() => {
    expectNotFoundErrorState();
  });
});

it('displays an error message when a server error occurs', async () => {
  render(<Index />);
  typeUsernameAndSubmit('server-error');

  expectEmptyState();

  await waitFor(() => {
    expectLoader();
  });

  await waitFor(() => {
    expectServerErrorState();
  });
});
