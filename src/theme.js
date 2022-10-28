const fontSizes = [12, 14, 18, 20, 24, 32, 64];
fontSizes.xs = fontSizes[0] + 'px';
fontSizes.s = fontSizes[1] + 'px';
fontSizes.m = fontSizes[2] + 'px';
fontSizes.l = fontSizes[4] + 'px';
fontSizes.xl = fontSizes[5] + 'px';
fontSizes.xxl = fontSizes[6] + 'px';

export const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    text: '#2a2a2a',
    main: '#b3d8ff',
    accent: '#170bfb',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: fontSizes,
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '5px',
    round: '50%',
  },
  breakpoints: [
    '1170px',
    '@media (min-width: 56em) and (orientation: landscape)',
  ],
  animation: {
    easeFast: '250ms ease-out',
    easeSlow: '500ms ease-out',
  },
};
