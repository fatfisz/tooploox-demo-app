import { ReactElement, ReactNode } from 'react';

import { styled } from './styled';

export function NoBreak({ children }: { children: ReactNode }): ReactElement {
  return <StyledNoBreak>{children}</StyledNoBreak>;
}

const StyledNoBreak = styled('span', {
  whiteSpace: 'nowrap',
});
