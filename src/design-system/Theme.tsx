import { ContextType, createContext, ReactElement, useContext } from 'react';

import { defaultTheme } from 'themes/default';

const ThemeContext = createContext(defaultTheme);

export type BorderRadius = keyof typeof defaultTheme['borderRadius'];
export type Color = keyof typeof defaultTheme['color'];
export type Shadow = keyof typeof defaultTheme['shadow'];
export type Size = keyof typeof defaultTheme['size'];
export type Spacing = keyof typeof defaultTheme['spacing'];

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
