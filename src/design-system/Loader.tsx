import { ReactElement } from 'react';

import { fadeIn, spin } from './animations';
import { styled } from './styled';

const size = 32;
const width = 0.1;

export function Loader(): ReactElement {
  return (
    <StyledLoader data-testid="loader">
      <Svg viewBox={`0 0 ${size} ${size}`}>
        <Path
          d={`
            M ${size / 2} 0
            A ${size / 2} ${size / 2} 0 1 0 ${size} ${size / 2}
            L ${size * (1 - width)} ${size / 2}
            A ${size * (0.5 - width)} ${size * (0.5 - width)} 0 1 1 ${size / 2} ${size * width}
            Z
          `}
        />
      </Svg>
    </StyledLoader>
  );
}

const StyledLoader = styled('div', {
  animationDelay: '1s',
  animationDuration: '100ms',
  animationName: fadeIn,
  animationFillMode: 'both',
  display: 'flex',
  justifyContent: 'center',
});

const Svg = styled('svg', {
  animationDuration: '1s',
  animationIterationCount: 'infinite',
  animationName: spin,
  animationTimingFunction: 'cubic-bezier(0.6, 0.4, 0.6, 0.8)',
  height: size,
  width: size,
});

const Path = styled('path', {
  fill: 'textLight',
});
