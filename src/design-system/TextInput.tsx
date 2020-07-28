import cx from 'classnames';
import { ChangeEvent as ReactChangeEvent, ReactElement, useCallback } from 'react';

import { useTextPseudoSelectorStyles, useTextStyles, useTheme } from 'design-system/Theme';
import Search from 'icons/search.svg';

export function TextInput({
  placeholder,
  search,
  value,
  onChange,
}: {
  placeholder?: string;
  search?: boolean;
  value: string;
  onChange: (value: string) => void;
}): ReactElement {
  const theme = useTheme();
  const inputStyles = useTextStyles('basic');
  const placeholderStyles = useTextPseudoSelectorStyles('placeholder', 'basic');
  const handleChange = useCallback(
    (event: ReactChangeEvent<HTMLInputElement>) => onChange(event.target.value),
    [onChange],
  );
  return (
    <>
      <div className="input-wrapper">
        {search && (
          <div className="icon-wrapper">
            <Search fill={theme.color.textDark} />
          </div>
        )}
        <input
          className={cx(inputStyles.className, placeholderStyles.className)}
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={handleChange}
        />
      </div>
      <style jsx>{`
        .input-wrapper {
          background-color: ${theme.color.inputBackground};
          border-radius: ${theme.borderRadius.basic};
          height: ${theme.size.control};
          position: relative;
        }

        input {
          background-color: transparent;
          border: none;
          color: ${theme.color.textDark};
          height: 100%;
          padding: 0 ${theme.spacing.xsmall};
          ${search &&
          `
            padding-left: calc(2 * ${theme.spacing.xxsmall} + ${theme.size.controlIcon});
          `};
          width: 100%;
        }

        input::placeholder {
          color: ${theme.color.textDisabled};
        }

        .icon-wrapper {
          display: flex;
          padding: 0 ${theme.spacing.xxsmall};
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(0, -50%);
          width: calc(2 * ${theme.spacing.xxsmall} + ${theme.size.controlIcon});
        }
      `}</style>
      {inputStyles.styles}
      {placeholderStyles.styles}
    </>
  );
}
