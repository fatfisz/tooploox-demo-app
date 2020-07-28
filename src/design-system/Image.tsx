import { ReactElement } from 'react';

import { BorderRadius, Size } from 'design-system/Theme';

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
  return <img alt={alt} src={src} data-borderRadius={borderRadius} data-size={size} />;
}
