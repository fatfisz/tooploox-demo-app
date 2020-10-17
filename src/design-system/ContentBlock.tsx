import { ReactElement, ReactNode } from 'react';

import { styled } from './styled';

export function ContentBlock({ children }: { children: ReactNode }): ReactElement {
  return <StyledContentBlock>{children}</StyledContentBlock>;
}

const StyledContentBlock = styled('div', {
  margin: '0 auto',
  maxWidth: 'contentBlock',
});
