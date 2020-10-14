import { ComponentProps, ReactElement, Suspense, useEffect, useState } from 'react';

export function SafeSuspense(props: ComponentProps<typeof Suspense>): ReactElement | null {
  const [mounted, setMounted] = useState(process.env.NODE_ENV === 'test');
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted ? <Suspense {...props} /> : null;
}
