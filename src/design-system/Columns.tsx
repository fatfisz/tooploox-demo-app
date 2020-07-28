import { ReactElement, ReactNode } from 'react';

import { Spacing } from 'design-system/Theme';

type AlignY = 'bottom' | 'center' | 'top';

export function Columns({
  alignY = 'top',
  children,
  space,
}: {
  alignY?: AlignY;
  children: ReactNode;
  space?: Spacing;
}): ReactElement {
  return (
    <div data-align-y={alignY} data-space={space}>
      {children}
    </div>
  );
}
