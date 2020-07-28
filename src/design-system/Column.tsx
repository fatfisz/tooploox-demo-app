import { ReactElement, ReactNode } from 'react';

type Width = 'fluid' | 'content';

export function Column({
  children,
  width = 'fluid',
}: {
  children: ReactNode;
  width?: Width;
}): ReactElement {
  return <div data-width={width}>{children}</div>;
}
