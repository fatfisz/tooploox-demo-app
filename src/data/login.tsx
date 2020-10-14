import { atom } from 'recoil';

export const loginAtom = atom<string | undefined>({
  key: 'login-atom',
  default: undefined,
});
