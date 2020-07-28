import { ReactElement } from 'react';

import { BorderRadius, Size, useTheme } from 'design-system/Theme';

export function Image({
  alt,
  borderRadius,
  size,
  src,
}: {
  alt: string;
  borderRadius?: BorderRadius;
  size: Size;
  src: string;
}): ReactElement {
  const theme = useTheme();
  return (
    <img
      alt={alt}
      src={src}
      style={{
        borderRadius: borderRadius && theme.borderRadius[borderRadius],
        maxHeight: theme.size[size],
        maxWidth: theme.size[size],
      }}
    />
  );
}
