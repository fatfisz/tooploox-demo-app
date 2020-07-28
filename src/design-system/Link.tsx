import { ReactElement, ReactNode } from 'react';

export function Link({ children, url }: { children: ReactNode; url: string }): ReactElement {
  return (
    <a href={url} rel="noopener noreferrer">
      {children}
    </a>
  );
}
