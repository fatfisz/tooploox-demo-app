import { ReactElement, ReactNode } from 'react';

import { BorderRadius, Color, Shadow, Spacing } from 'design-system/Theme';

export function Box({
  background,
  borderRadius,
  children,
  padding,
  shadow,
}: {
  background?: Color;
  borderRadius?: BorderRadius;
  children: ReactNode;
  padding?: Spacing;
  shadow?: Shadow;
}): ReactElement {
  return (
    <div
      data-background={background}
      data-border-radius={borderRadius}
      data-padding={padding}
      data-shadow={shadow}
    >
      {children}
    </div>
  );
}
