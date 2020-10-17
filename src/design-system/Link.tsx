import { ReactElement, ReactNode } from 'react';

import { styled } from './styled';

export function Link({ children, url }: { children: ReactNode; url: string }): ReactElement {
  return (
    <StyledLink href={url} rel="noopener noreferrer">
      {children}
    </StyledLink>
  );
}

const StyledLink = styled('a', {
  color: 'textLink',
  display: 'block',
  text: 'basic',
  textDecoration: 'none',

  ':hover': {
    textDecoration: 'underline',
  },
});
