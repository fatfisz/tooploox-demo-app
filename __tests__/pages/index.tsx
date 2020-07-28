import { render, screen } from '@testing-library/react';

import Index from '../../pages/index';

it('displays a text input and a submit button', () => {
  render(<Index />);

  expect(screen.queryAllByRole('textbox')).toHaveLength(1);
  expect(screen.queryAllByRole('button')).toHaveLength(1);
});
