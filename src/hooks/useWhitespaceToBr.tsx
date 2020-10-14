import { Children, ReactNode, useMemo } from 'react';

export function useWhitespaceToBr(string: string | undefined): ReactNode {
  return useMemo(() => {
    if (!string) {
      return string;
    }
    const parts = string.trim().split(/\s+/);
    const partsWithBr = parts.reduce(
      (partsWithBr, part, index) => {
        if (index > 0) {
          partsWithBr.push(
            <>
              <br />
              {part}
            </>,
          );
        }
        return partsWithBr;
      },
      [<>{parts[0]}</>],
    );
    return Children.toArray(partsWithBr);
  }, [string]);
}
