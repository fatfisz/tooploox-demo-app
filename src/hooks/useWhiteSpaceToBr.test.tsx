import { renderHook } from '@testing-library/react-hooks';

import { useWhitespaceToBr } from 'hooks/useWhitespaceToBr';

it('returns words from the name separated with <br>', () => {
  const { result } = renderHook(() => useWhitespaceToBr('Foo Bar Baz'));

  expect(result.current).toMatchInlineSnapshot(`
    Array [
      "Foo",
      <br />,
      "Bar",
      <br />,
      "Baz",
    ]
  `);
});

it('trims the surrounding whitespace', () => {
  const { result } = renderHook(() => useWhitespaceToBr('  Foo Bar\t'));

  expect(result.current).toMatchInlineSnapshot(`
    Array [
      "Foo",
      <br />,
      "Bar",
    ]
  `);
});

it('collapses multiple spaces into one', () => {
  const { result } = renderHook(() => useWhitespaceToBr('Foo   Bar'));

  expect(result.current).toMatchInlineSnapshot(`
    Array [
      "Foo",
      <br />,
      "Bar",
    ]
  `);
});

it('returns an empty value for an empty name', () => {
  const { result } = renderHook(() => useWhitespaceToBr(''));

  expect(result.current).toMatchInlineSnapshot(`
    Array [
      "",
    ]
  `);
});
