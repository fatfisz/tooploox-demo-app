import { ComponentProps, ReactElement } from 'react';

import { getVariants, styled } from './styled';

export function Image({
  alt,
  borderRadius,
  size,
  src,
}: {
  alt: string;
  borderRadius?: ComponentProps<typeof StyledImage>['borderRadius'];
  size: ComponentProps<typeof StyledImage>['size'];
  src: string;
}): ReactElement {
  return <StyledImage alt={alt} borderRadius={borderRadius} size={size} src={src} />;
}

const StyledImage = styled('img', {
  display: 'block',

  variants: {
    ...getVariants('radii', 'borderRadius'),
    ...getVariants('sizes', 'size', (value) => ({
      maxHeight: value,
      maxWidth: value,
    })),
  },
});
