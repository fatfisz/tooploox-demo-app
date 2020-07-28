import { ReactElement } from 'react';

export function Button({
  children,
  submit = false,
}: {
  children: string;
  submit?: boolean;
}): ReactElement {
  return <button type={submit ? 'submit' : 'button'}>{children}</button>;
}
