import { ChangeEvent as ReactChangeEvent, ReactElement, useCallback } from 'react';

import { styled } from './styled';

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
  const handleChange = useCallback(
    (event: ReactChangeEvent<HTMLInputElement>) => onChange(event.target.value),
    [onChange],
  );
  return (
    <InputWrapper>
      {search && (
        <IconWrapper>
          <StyledSearch />
        </IconWrapper>
      )}
      <Input
        placeholder={placeholder}
        search={search}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </InputWrapper>
  );
}

const InputWrapper = styled('div', {
  backgroundColor: 'inputBackground',
  borderRadius: 'basic',
  position: 'relative',
});

const Input = styled('input', {
  backgroundColor: 'transparent',
  border: 'none',
  color: 'textDark',
  controlSize: ['control', 'xsmall'],
  text: { font: 'basic', ignoreLineHeight: true },
  width: '100%',

  '::placeholder': {
    color: 'textDisabled',
  },

  variants: {
    search: {
      true: {
        controlIconPaddingLeft: ['controlIcon', 'xxsmall'],
      },
    },
  },
});

const IconWrapper = styled('div', {
  controlIcon: ['controlIcon', 'xxsmall'],
});

const StyledSearch = styled(Search, {
  fill: 'textDark',
});
