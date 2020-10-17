import { css } from './styled';

export const fadeIn = css.keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const spin = css.keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
});
