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

  expect(screen.queryByRole('heading')).toBeNull();

  act(() => {
    jest.runAllTimers();
  });

  expect(getMainHeading()).toHaveTextContent('foobar');
});

function getMainHeading(): HTMLElement {
  const headings = screen.queryAllByRole('heading').filter((heading) => heading.tagName === 'H1');
  expect(headings).toHaveLength(1);
  return headings[0];
}
