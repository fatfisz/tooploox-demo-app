import { ComponentProps, ReactElement, ReactNode } from 'react';

import { getVariants, styled } from './styled';

export function Stack({
  children,
  space,
}: {
  children: ReactNode;
  space?: ComponentProps<typeof StyledStack>['space'];
}): ReactElement {
  return <StyledStack space={space}>{children}</StyledStack>;
}

const StyledStack = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  variants: {
    ...getVariants('space', 'space', (value) => ({
      '& > *:not(:first-child)': {
        marginTop: value,
      },
    })),
  },
});
