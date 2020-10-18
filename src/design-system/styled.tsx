import { createStyled } from '@stitches/react';

export const defaultTokens = {
  colors: {
    primary: '#452cdc',
    bodyBackground: '#fbfcfd',
    panelBackground: '#ffffff',
    inputBackground: '#f0f3f4',
    textHighEmphasis: 'rgba(0, 0, 0, 0.87)',
    textDisabled: '#9e9e9e',
    textDark: '#4f4f4f',
    textLight: '#828282',
    textLink: '#2f80ed',
    textControl: '#ffffff',
  },
  fonts: {
    basic: 'Roboto',
    control: 'Roboto',
    heading: 'Roboto',
  },
  fontSizes: {
    basic: '14px',
    control: '12px',
    heading: '18px',
  },
  fontWeights: {
    basic: '400',
    control: '700',
    heading: '500',
  },
  letterSpacings: {
    basic: '0.4px',
    control: '0.4px',
    heading: '0.15px',
  },
  lineHeights: {
    basic: '19px',
    control: '16px',
    heading: '24px',
  },
  radii: {
    basic: '8px',
    large: '12px',
  },
  shadows: {
    basic: '0px 2px 7px rgba(0, 0, 0, 0.1)',
  },
  sizes: {
    avatar: '64px',
    contentBlock: '940px',
    control: '36px',
    controlIcon: '16px',
  },
  space: {
    xxsmall: '8px',
    xsmall: '12px',
    small: '16px',
    medium: '24px',
    large: '32px',
  },
} as const;

type Tokens = keyof typeof defaultTokens;

type TokenNames<Token extends Tokens> = keyof typeof defaultTokens[Token];

type Fonts = TokenNames<'fonts'>;

type VariantDeclaration = NonNullable<Parameters<typeof styled>[1]['variants']>[string][string];

export const { styled, css } = createStyled({
  tokens: defaultTokens,
  utils: {
    controlIcon: (
      [size, horzPadding]: [size: TokenNames<'sizes'>, horzPadding: TokenNames<'space'>],
      config,
    ) => ({
      display: 'flex',
      left: 0,
      padding: `0 ${horzPadding}`,
      position: 'absolute',
      top: '50%',
      transform: 'translate(0, -50%)',
      width: `calc(${config.tokens.sizes[size]} + 2 * ${config.tokens.space[horzPadding]})`,
    }),

    controlIconPaddingLeft: (
      [size, horzPadding]: [size: TokenNames<'sizes'>, horzPadding: TokenNames<'space'>],
      config,
    ) => ({
      paddingLeft: `calc(${config.tokens.sizes[size]} + 2 * ${config.tokens.space[horzPadding]})`,
    }),

    controlSize: (
      [size, vertPadding, horzPadding = vertPadding]:
        | [size: TokenNames<'sizes'>, padding: TokenNames<'space'>]
        | [
            size: TokenNames<'sizes'>,
            vertPadding: TokenNames<'space'>,
            horzPadding: TokenNames<'space'>,
          ],
      config,
    ) => ({
      height: size,
      lineHeight: `calc(${config.tokens.sizes[size]} - 2 * ${config.tokens.space[vertPadding]})`,
      padding: `${vertPadding} ${horzPadding}`,
    }),

    text: (value: Fonts | { font: Fonts; ignoreLineHeight?: boolean }) => {
      const { font, ignoreLineHeight = false } =
        typeof value === 'string' ? { font: value } : value;
      return {
        fontFamily: font,
        fontSize: font,
        fontWeight: font,
        letterSpacing: font,
        lineHeight: ignoreLineHeight ? undefined : font,
      };
    },
  },
});

export function getVariants<Token extends Tokens, PropName extends string>(
  token: Token,
  propName: PropName,
  propNameOrTransform: string | ((value: TokenNames<Token>) => VariantDeclaration) = propName,
): Record<PropName, Record<TokenNames<Token>, VariantDeclaration>> {
  return {
    [propName]: mapValues(defaultTokens[token], getCssDeclarationTransform(propNameOrTransform)),
  } as Record<PropName, Record<TokenNames<Token>, VariantDeclaration>>;
}

function getCssDeclarationTransform<Token extends Tokens>(
  propNameOrTransform: string | ((value: TokenNames<Token>) => VariantDeclaration),
): (value: unknown, key: TokenNames<Token>) => VariantDeclaration {
  return typeof propNameOrTransform === 'string'
    ? (value, key) => ({ [propNameOrTransform]: key })
    : (value, key) => propNameOrTransform(key);
}

function mapValues<Type extends Record<string, unknown>, Value>(
  object: Type,
  map: (value: Type[keyof Type], key: keyof Type) => Value,
): Record<keyof Type, Value> {
  return Object.fromEntries(
    (Object.entries(object) as [keyof Type, Type[keyof Type]][]).map(([key, value]) => [
      key,
      map(value, key),
    ]),
  ) as Record<keyof Type, Value>;
}
