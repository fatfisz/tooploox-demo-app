import { Component, ComponentType, ReactElement, ReactNode } from 'react';
import { atom, RecoilState, useRecoilState } from 'recoil';

interface Props {
  children: ReactNode;
  ErrorComponent: ComponentType<{ error: any }>;
}

export function getErrorBoundary(
  key: string,
): [ErrorBoundary: ({ children }: Props) => ReactElement, errorAtom: RecoilState<any>] {
  const errorAtom = atom<any>({
    key: `error-boundary/${key}-atom`,
    default: undefined,
  });

  class InnerErrorBoundary extends Component<{
    onError: (error: any) => void;
  }> {
    componentDidCatch(error: any): void {
      this.props.onError(error);
    }

    render(): ReactElement {
      const { children } = this.props;
      return <>{children}</>;
    }
  }

  return [
    function ErrorBoundary({ children, ErrorComponent }): ReactElement {
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
