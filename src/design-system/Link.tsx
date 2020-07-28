import { ReactElement, ReactNode } from 'react';

import { useTextStyles, useTheme } from 'design-system/Theme';

export function Link({ children, url }: { children: ReactNode; url: string }): ReactElement {
  const theme = useTheme();
  const textStyles = useTextStyles('basic');
  return (
    <>
      <a className={textStyles.className} href={url} rel="noopener noreferrer">
        {children}
      </a>
      <style jsx>{`
        a {
          color: ${theme.color.textLink};
          display: block;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
      {textStyles.styles}
    </>
  );
}
