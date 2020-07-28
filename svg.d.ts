declare module '*.svg' {
  import { ReactElement, SVGAttributes } from 'react';
  const SvgComponent: (props: SVGAttributes<SVGElement>) => ReactElement;
  export default SvgComponent;
}
