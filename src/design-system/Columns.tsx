import { ReactElement, ReactNode } from 'react';

import { Spacing, useTheme } from 'design-system/Theme';

const alignYToAlignItems = {
  bottom: 'flex-end',
  center: 'center',
  top: 'flex-start',
};

export function Columns({
  alignY = 'top',
  children,
  space,
}: {
  alignY?: keyof typeof alignYToAlignItems;
  children: ReactNode;
  space?: Spacing;
}): ReactElement {
  const theme = useTheme();
  return (
    <>
      <div>{children}</div>
      <style jsx>
        {`
          div {
            align-items: ${alignYToAlignItems[alignY]};
            display: flex;
            flex-direction: row;
          }

          div > :global(*:not(:first-child)) {
            margin-left: ${space && theme.spacing[space]};
          }
        `}
      </style>
    </>
  );
}
