import { ReactElement, ReactNode } from 'react';

import { Spacing, useTheme } from 'design-system/Theme';

export function Stack({ children, space }: { children: ReactNode; space?: Spacing }): ReactElement {
  const theme = useTheme();
  return (
    <>
      <div>{children}</div>
      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: column;
          }

          div > :global(*:not(:first-child)) {
            margin-top: ${space && theme.spacing[space]};
          }
        `}
      </style>
    </>
  );
}
