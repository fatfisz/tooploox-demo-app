import { ReactElement, ReactNode } from 'react';

type Width = 'fluid' | 'content';

export function Column({
  children,
  width = 'fluid',
}: {
  children: ReactNode;
  width?: Width;
}): ReactElement {
  return (
    <div
      style={{
        flexBasis: width === 'fluid' ? 0 : 'auto',
        flexGrow: width === 'fluid' ? 1 : 0,
        flexShrink: 0,
        minWidth: 0,
      }}
    >
      {children}
    </div>
  );
}
