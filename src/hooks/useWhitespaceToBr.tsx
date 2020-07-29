import { Children, ReactElement, ReactNode, useMemo } from 'react';

export function useWhitespaceToBr(string: string): ReactNode {
  return useMemo(() => {
    const parts = string.trim().split(/\s+/);
    const partsWithBr = parts.reduce(
      (partsWithBr, part, index) => {
        if (index > 0) {
          partsWithBr.push(<br />, part);
        }
        return partsWithBr;
      },
      [parts[0]] as (string | ReactElement)[],
    );
    return Children.toArray(partsWithBr);
  }, [string]);
}
