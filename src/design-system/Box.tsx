import { ComponentProps, ReactElement, ReactNode } from 'react';

import { getVariants, styled } from './styled';

export function Box({
  background,
  borderRadius,
  children,
  padding,
  shadow,
}: {
  background?: ComponentProps<typeof StyledBox>['background'];
  borderRadius?: ComponentProps<typeof StyledBox>['borderRadius'];
  children: ReactNode;
  padding?: ComponentProps<typeof StyledBox>['padding'];
  shadow?: ComponentProps<typeof StyledBox>['shadow'];
}): ReactElement {
  return (
    <StyledBox
      background={background}
      borderRadius={borderRadius}
      padding={padding}
      shadow={shadow}
    >
      {children}
    </StyledBox>
  );
}

const StyledBox = styled('div', {
  variants: {
    ...getVariants('colors', 'background', 'backgroundColor'),
    ...getVariants('radii', 'borderRadius'),
    ...getVariants('shadows', 'shadow', 'boxShadow'),
    ...getVariants('space', 'padding'),
  },
});
