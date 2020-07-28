import Head from 'next/head';
import { ContextType, createContext, ReactElement, useContext } from 'react';
import css from 'styled-jsx/css';

import { defaultTheme } from 'themes/default';

const ThemeContext = createContext(defaultTheme);

export type BorderRadius = keyof typeof defaultTheme['borderRadius'];
export type Color = keyof typeof defaultTheme['color'];
export type Shadow = keyof typeof defaultTheme['shadow'];
export type Size = keyof typeof defaultTheme['size'];
export type Spacing = keyof typeof defaultTheme['spacing'];
export type Text = keyof typeof defaultTheme['text'];

export function useTheme(): ContextType<typeof ThemeContext> {
  return useContext(ThemeContext);
}

interface TextProperties {
  color: Color;
  family: string;
  letterSpacing: string;
  lineHeight: string;
  size: string;
  style: string;
  weight: number;
}

export function useTextStyles(
  text: Text,
  extraProperties?: Partial<TextProperties>,
): {
  className: string;
  styles: string;
} {
  const theme = useTheme();
  const textProperties = { ...theme.text[text], ...extraProperties };
  return css.resolve`
    color: ${theme.color[textProperties.color]};
    font-family: ${textProperties.family};
    font-size: ${textProperties.size};
    font-style: ${textProperties.style};
    font-weight: ${textProperties.weight};
    letter-spacing: ${textProperties.letterSpacing};
    line-height: ${textProperties.lineHeight};
  `;
}

export function ThemeHead(): ReactElement {
  const { color, fontLinks } = useTheme();
  return (
    <>
      <Head>{fontLinks}</Head>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          background-color: ${color.bodyBackground};
          margin: 0;
        }
      `}</style>
    </>
  );
}
