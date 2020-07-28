import { ReactElement, ReactNode } from 'react';

export function ContentBlock({ children }: { children: ReactNode }): ReactElement {
  return <div>{children}</div>;
}
