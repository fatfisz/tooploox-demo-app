import { ReactElement, ReactNode } from 'react';

import { useTextStyles } from 'design-system/Theme';

export function Text({ children }: { children: ReactNode }): ReactElement {
  const textStyles = useTextStyles('basic');
  return (
    <>
      <span className={textStyles.className}>{children}</span>
      <style jsx>{`
        span {
          display: block;
        }
      `}</style>
      {textStyles.styles}
    </>
  );
}
