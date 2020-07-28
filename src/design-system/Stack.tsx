import { ReactElement, ReactNode } from 'react';

import { Spacing } from 'design-system/Theme';

export function Stack({ children, space }: { children: ReactNode; space?: Spacing }): ReactElement {
  return <div data-space={space}>{children}</div>;
}
