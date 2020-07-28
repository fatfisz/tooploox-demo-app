export const defaultTheme = {
  borderRadius: {
    large: '12px',
  },
  color: {
    bodyBackground: '#fbfcfd',
    panelBackground: '#ffffff',
    textHighEmphasis: 'rgba(0, 0, 0, 0.87)',
    textLight: '#828282',
    textLink: '#2f80ed',
  },
  shadow: {
    basic: '0px 2px 7px rgba(0, 0, 0, 0.1)',
  },
  size: {
    avatar: '64px',
    contentBlock: '940px',
  },
  spacing: {
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
  },
  fontLinks: (
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
  ),
} as const;
