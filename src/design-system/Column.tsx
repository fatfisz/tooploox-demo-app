import { ComponentProps, ReactElement, ReactNode } from 'react';

import { styled } from './styled';

export function Column({
  children,
  width = 'fluid',
}: {
  children: ReactNode;
  width?: ComponentProps<typeof StyledColumn>['width'];
}): ReactElement {
  return <StyledColumn width={width}>{children}</StyledColumn>;
}

const StyledColumn = styled('div', {
  flexShrink: 0,
  minWidth: 0,

  variants: {
    width: {
      fluid: { flexBasis: 0, flexGrow: 1 },
      content: { flexBasis: 'auto', flexGrow: 0 },
    },
  },
});
