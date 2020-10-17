import { ComponentProps, ReactElement, ReactNode } from 'react';

import { getVariants, styled } from './styled';

export function Columns({
  alignY = 'top',
  children,
  space,
}: {
  alignY?: ComponentProps<typeof StyledColumns>['alignY'];
  children: ReactNode;
  space?: ComponentProps<typeof StyledColumns>['space'];
}): ReactElement {
  return (
    <StyledColumns alignY={alignY} space={space}>
      {children}
    </StyledColumns>
  );
}

const StyledColumns = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  variants: {
    alignY: {
      bottom: { alignItems: 'flex-end' },
      center: { alignItems: 'center' },
      top: { alignItems: 'flex-start' },
    },
    ...getVariants('space', 'space', (value) => ({
      '& > *:not(:first-child)': {
        marginLeft: value,
      },
    })),
  },
});
