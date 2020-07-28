import { ChangeEvent as ReactChangeEvent, ReactElement, useCallback } from 'react';

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
  const handleChange = useCallback(
    (event: ReactChangeEvent<HTMLInputElement>) => onChange(event.target.value),
    [onChange],
  );
  return (
    <input
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={handleChange}
      data-search={search}
    />
  );
}
