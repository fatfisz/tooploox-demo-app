import { ComponentProps, ReactElement, ReactNode } from 'react';

import { styled } from './styled';

interface Props {
  align?: ComponentProps<typeof StyledHeading>['align'];
  children: ReactNode;
}

export function LargeHeading({ align = 'left', children }: Props): ReactElement {
  return (
    <StyledHeading as="h1" align={align}>
      {children}
    </StyledHeading>
  );
}

export function MediumHeading({ align = 'left', children }: Props): ReactElement {
  return (
    <StyledHeading as="h2" align={align}>
      {children}
    </StyledHeading>
  );
}

export function SmallHeading({ align = 'left', children }: Props): ReactElement {
  return (
    <StyledHeading as="h3" align={align}>
      {children}
    </StyledHeading>
  );
}

const StyledHeading = styled('span', {
  color: 'textHighEmphasis',
  display: 'block',
  margin: 0,
  text: 'heading',

  variants: {
    align: {
      left: { textAlign: 'left' },
      right: { textAlign: 'right' },
      center: { textAlign: 'center' },
    },
  },
});
