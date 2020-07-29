import { ReactElement } from 'react';

import { useTheme } from 'design-system/Theme';

const size = 32;
const width = 0.1;

export function Loader(): ReactElement {
  const theme = useTheme();
  return (
    <>
      <div data-testid="loader">
        <svg viewBox={`0 0 ${size} ${size}`}>
          <path
            d={`
            M ${size / 2} 0
            A ${size / 2} ${size / 2} 0 1 0 ${size} ${size / 2}
            L ${size * (1 - width)} ${size / 2}
            A ${size * (0.5 - width)} ${size * (0.5 - width)} 0 1 1 ${size / 2} ${size * width}
            Z
          `}
            fill={theme.color.textLight}
          />
        </svg>
      </div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
        }

        svg {
          animation-duration: 1s;
          animation-iteration-count: infinite;
          animation-name: spin;
          animation-timing-function: cubic-bezier(0.6, 0.4, 0.6, 0.8);
          height: ${size}px;
          width: ${size}px;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
