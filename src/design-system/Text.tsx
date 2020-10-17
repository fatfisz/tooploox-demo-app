import { ReactElement, ReactNode } from 'react';

import { styled } from './styled';

export function Text({
  children,
  'data-testid': dataTestid,
}: {
  children: ReactNode;
  'data-testid'?: string;
}): ReactElement {
  return <StyledText data-testid={dataTestid}>{children}</StyledText>;
}

const StyledText = styled('span', {
  display: 'block',
  text: 'basic',
});
