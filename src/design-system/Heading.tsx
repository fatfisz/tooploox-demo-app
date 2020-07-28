import { ReactElement, ReactNode } from 'react';

export function Heading({ children }: { children: ReactNode }): ReactElement {
  return <h2>{children}</h2>;
}
