import { Component, ComponentType, ReactElement, ReactNode } from 'react';
import { atom, RecoilState, useRecoilState } from 'recoil';

interface Props {
  children: ReactNode;
  ErrorComponent: ComponentType<{ error: unknown }>;
}

export function getErrorBoundary(
  key: string,
): [ErrorBoundary: ({ children }: Props) => ReactElement, errorAtom: RecoilState<unknown>] {
  const errorAtom = atom<unknown>({
    key: `error-boundary/${key}-atom`,
    default: undefined,
  });

  class InnerErrorBoundary extends Component<{ onError: (error: unknown) => void }> {
    componentDidCatch(error: unknown): void {
      this.props.onError(error);
    }

    render(): ReactElement {
      const { children } = this.props;
      return <>{children}</>;
    }
  }

  return [
    function ErrorBoundary({ children, ErrorComponent }) {
      const [error, setError] = useRecoilState(errorAtom);
      return error ? (
        <ErrorComponent error={error} />
      ) : (
        <InnerErrorBoundary onError={setError}>{children}</InnerErrorBoundary>
      );
    },
    errorAtom,
  ];
}
