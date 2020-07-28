export const defaultTheme = {
  borderRadius: {
    basic: '8px',
    large: '12px',
  },
  color: {
    primary: '#452cdc',
    bodyBackground: '#fbfcfd',
    panelBackground: '#ffffff',
    inputBackground: '#f0f3f4',
    textHighEmphasis: 'rgba(0, 0, 0, 0.87)',
    textDark: '#4f4f4f',
    textLight: '#828282',
    textLink: '#2f80ed',
    textControl: '#ffffff',
  },
  shadow: {
    basic: '0px 2px 7px rgba(0, 0, 0, 0.1)',
  },
  size: {
    avatar: '64px',
    contentBlock: '940px',
    control: '36px',
  },
  spacing: {
    xsmall: '12px',
    small: '16px',
    medium: '24px',
    large: '32px',
  },
  text: {
    heading: {
      color: 'textHighEmphasis',
      family: 'Roboto',
      letterSpacing: '0.15px',
      lineHeight: '24px',
      size: '18px',
      style: 'normal',
      weight: 500,
    },
    basic: {
      color: 'textLight',
      family: 'Roboto',
      letterSpacing: '0.4px',
      lineHeight: '19px',
      size: '14px',
      style: 'normal',
      weight: 400,
    },
    control: {
      color: 'textControl',
      family: 'Roboto',
      letterSpacing: '0.4px',
      lineHeight: '16px',
      size: '12px',
      style: 'normal',
      weight: 700,
    },
  },
  fontLinks: (
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
  ),
} as const;
