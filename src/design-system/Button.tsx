import { ReactElement } from 'react';

import { styled } from './styled';

export function Button({
  children,
  submit = false,
}: {
  children: string;
  submit?: boolean;
}): ReactElement {
  return <StyledButton type={submit ? 'submit' : 'button'}>{children}</StyledButton>;
}

const StyledButton = styled('button', {
  backgroundColor: 'primary',
  border: 'none',
  borderRadius: 'basic',
  color: 'textControl',
  controlSize: ['control', 'xsmall'],
  text: { font: 'control', ignoreLineHeight: true },
});
