import { ReactElement, ReactNode } from 'react';

export function Text({ children }: { children: ReactNode }): ReactElement {
  return <span>{children}</span>;
}
