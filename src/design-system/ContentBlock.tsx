import { ReactElement, ReactNode } from 'react';

import { useTheme } from 'design-system/Theme';

export function ContentBlock({ children }: { children: ReactNode }): ReactElement {
  const theme = useTheme();
  return (
    <>
      <div>{children}</div>
      <style jsx>
        {`
          div {
            margin: 0 auto;
            max-width: ${theme.size.contentBlock};
          }
        `}
      </style>
    </>
  );
}
