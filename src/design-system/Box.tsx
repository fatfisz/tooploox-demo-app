import { ReactElement, ReactNode } from 'react';

import { BorderRadius, Color, Shadow, Spacing, useTheme } from 'design-system/Theme';

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
  const theme = useTheme();
  return (
    <div
      style={{
        background: background && theme.color[background],
        borderRadius: borderRadius && theme.borderRadius[borderRadius],
        boxShadow: shadow && theme.shadow[shadow],
        padding: padding && theme.spacing[padding],
      }}
    >
      {children}
    </div>
  );
}
