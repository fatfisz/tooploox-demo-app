import { ReactElement, FormEvent as ReactFormEvent, ReactNode, useCallback } from 'react';

export function Form({
  children,
  onSubmit,
}: {
  children: ReactNode;
  onSubmit: () => void;
}): ReactElement {
  const onSubmitWithPreventDefault = useCallback(
    (event: ReactFormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit();
    },
    [onSubmit],
  );
  return (
    <form action="." onSubmit={onSubmitWithPreventDefault}>
      {children}
    </form>
  );
}
