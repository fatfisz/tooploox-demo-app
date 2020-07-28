import cx from 'classnames';
import { ReactElement, ReactNode, createElement } from 'react';
import css from 'styled-jsx/css';

import { useTextStyles } from 'design-system/Theme';

const headingStyles = css.resolve`
  display: block;
  margin: 0;
`;

export function Heading({
  align = 'left',
  children,
  level,
}: {
  align?: 'left' | 'right' | 'center';
  children: ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}): ReactElement {
  const textStyles = useTextStyles('heading');
  return (
    <>
      {createElement(
        `h${level}`,
        {
          className: cx(headingStyles.className, textStyles.className),
          style: {
            textAlign: align,
          },
        },
        children,
      )}
      {headingStyles.styles}
      {textStyles.styles}
    </>
  );
}
