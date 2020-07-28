import { ReactElement, ReactNode } from 'react';

export function NoBreak({ children }: { children: ReactNode }): ReactElement {
  return (
    <>
      <span>{children}</span>
      <style jsx>{`
        span {
          white-space: nowrap;
        }
      `}</style>
    </>
  );
}
