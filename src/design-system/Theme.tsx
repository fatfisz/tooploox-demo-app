import { ContextType, createContext, ReactElement, useContext } from 'react';

import { defaultTheme } from 'themes/default';

const ThemeContext = createContext(defaultTheme);

export type BorderRadius = unknown;
export type Color = keyof typeof defaultTheme['color'];
export type Shadow = unknown;
export type Size = unknown;
export type Spacing = unknown;

export function useTheme(): ContextType<typeof ThemeContext> {
  return useContext(ThemeContext);
}

export function ThemeHead(): ReactElement {
  const { color } = useTheme();
  return (
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }

      body {
        background-color: ${color.bodyBackground};
        margin: 0;
      }
    `}</style>
  );
}
