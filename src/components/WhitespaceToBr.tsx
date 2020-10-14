import { ReactElement } from 'react';

import { useWhitespaceToBr } from 'hooks/useWhitespaceToBr';

export function WhitespaceToBr({ children }: { children: string }): ReactElement {
  return <>{useWhitespaceToBr(children)}</>;
}
