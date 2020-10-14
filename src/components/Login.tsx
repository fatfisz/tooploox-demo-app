import { ReactElement } from 'react';
import { useRecoilValue } from 'recoil';

import { loginAtom } from 'data/login';

export function Login(): ReactElement {
  return <>{useRecoilValue(loginAtom)}</>;
}
