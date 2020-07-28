import { ChangeEvent as ReactChangeEvent, ReactElement, useCallback } from 'react';

import { useTextStyles, useTheme } from 'design-system/Theme';

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
  const handleChange = useCallback(
    (event: ReactChangeEvent<HTMLInputElement>) => onChange(event.target.value),
    [onChange],
  );
  return (
    <>
      <div className="input-wrapper">
        <input
          className={inputStyles.className}
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={handleChange}
          data-search={search}
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
          width: 100%;
        }
      `}</style>
      {inputStyles.styles}
    </>
  );
}
