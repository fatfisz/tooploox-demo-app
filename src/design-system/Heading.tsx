import { ReactElement, ReactNode } from 'react';

import { useTextStyles } from 'design-system/Theme';

export function Heading({ children }: { children: ReactNode }): ReactElement {
  const headingStyles = useTextStyles('heading');
  return (
    <>
      <h2 className={headingStyles.className}>{children}</h2>
      <style jsx>{`
        h2 {
          display: block;
          margin: 0;
        }
      `}</style>
      {headingStyles.styles}
    </>
  );
}
