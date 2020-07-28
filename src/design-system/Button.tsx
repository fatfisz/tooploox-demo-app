import { ReactElement } from 'react';

import { useTextStyles, useTheme } from 'design-system/Theme';

export function Button({
  children,
  submit = false,
}: {
  children: string;
  submit?: boolean;
}): ReactElement {
  const theme = useTheme();
  const buttonTextStyles = useTextStyles('control');
  return (
    <>
      <button className={buttonTextStyles.className} type={submit ? 'submit' : 'button'}>
        {children}
      </button>
      <style jsx>{`
        button {
          background-color: ${theme.color.primary};
          border: none;
          border-radius: ${theme.borderRadius.basic};
          height: ${theme.size.control};
          line-height: calc(${theme.size.control} - 2 * ${theme.spacing.xsmall});
          padding: ${theme.spacing.xsmall};
        }
      `}</style>
      {buttonTextStyles.styles}
    </>
  );
}
