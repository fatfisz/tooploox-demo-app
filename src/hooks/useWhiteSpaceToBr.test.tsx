import { renderHook } from '@testing-library/react-hooks';

import { useWhitespaceToBr } from 'hooks/useWhitespaceToBr';

it('returns words from the name separated with <br>', () => {
  const { result } = renderHook(() => useWhitespaceToBr('Foo Bar Baz'));

  expect(result.current).toMatchInlineSnapshot(`
    Array [
      <React.Fragment>
        Foo
      </React.Fragment>,
      <React.Fragment>
        <br />
        Bar
      </React.Fragment>,
      <React.Fragment>
        <br />
        Baz
      </React.Fragment>,
    ]
  `);
});

it('trims the surrounding whitespace', () => {
  const { result } = renderHook(() => useWhitespaceToBr('  Foo Bar\t'));

  expect(result.current).toMatchInlineSnapshot(`
    Array [
      <React.Fragment>
        Foo
      </React.Fragment>,
      <React.Fragment>
        <br />
        Bar
      </React.Fragment>,
    ]
  `);
});

it('collapses multiple spaces into one', () => {
  const { result } = renderHook(() => useWhitespaceToBr('Foo   Bar'));

  expect(result.current).toMatchInlineSnapshot(`
    Array [
      <React.Fragment>
        Foo
      </React.Fragment>,
      <React.Fragment>
        <br />
        Bar
      </React.Fragment>,
    ]
  `);
});

it('returns an empty value for an empty name', () => {
  const { result } = renderHook(() => useWhitespaceToBr(''));

  expect(result.current).toMatchInlineSnapshot(`""`);
});
