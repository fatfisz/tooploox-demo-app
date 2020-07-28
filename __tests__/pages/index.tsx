import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Index from '../../pages/index';

it('displays a textbox and a submit button', () => {
  render(<Index />);

  expect(screen.queryAllByRole('textbox')).toHaveLength(1);
  expect(screen.queryAllByRole('button')).toHaveLength(1);
});

it('displays the username in the main heading when typed and submitted', () => {
  render(<Index />);
  userEvent.type(screen.getByRole('textbox'), 'foobar');
  userEvent.click(screen.getByRole('button'));

  expectEmptyState();

  act(() => {
    jest.runAllTimers();
  });

  expect(screen.queryAllByRole('heading')).toHaveLength(2);
  expect(getMainHeading()).toHaveTextContent('foobar');
  expect(getSubHeading()).toHaveTextContent('Top repositories');
});

it('does not display the username in the main heading unless submitted', () => {
  render(<Index />);
  userEvent.type(screen.getByRole('textbox'), 'foobar');

  expectEmptyState();

  act(() => {
    jest.runAllTimers();
  });

  expectEmptyState();
});

function expectEmptyState(): void {
  expect(screen.queryAllByRole('heading')).toHaveLength(1);
  expect(getSubHeading()).toHaveTextContent('Type a username');
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
