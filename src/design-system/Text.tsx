import { ReactElement, ReactNode } from 'react';

import { useTextStyles } from 'design-system/Theme';

export function Text({
  children,
  'data-testid': dataTestid,
}: {
  children: ReactNode;
  'data-testid'?: string;
}): ReactElement {
  const textStyles = useTextStyles('basic');
  return (
    <>
      <span className={textStyles.className} data-testid={dataTestid}>
        {children}
      </span>
      <style jsx>{`
        span {
          display: block;
        }
      `}</style>
      {textStyles.styles}
    </>
  );
}
