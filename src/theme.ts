import { createTheme } from '@mantine/core';
import type { MantineColorsTuple } from '@mantine/core';

/** Teal scale centered on brand #0e7d79 */
const teal: MantineColorsTuple = [
  '#e6f5f4',
  '#c2e6e4',
  '#9ad6d3',
  '#6fc4bf',
  '#45b2ac',
  '#1f9a94',
  '#0e7d79',
  '#0b6864',
  '#08524f',
  '#053c3a',
];

export const theme = createTheme({
  primaryColor: 'teal',
  primaryShade: { light: 6, dark: 5 },
  colors: {
    teal,
  },
  fontFamily:
    '"DM Sans", "Segoe UI", system-ui, -apple-system, sans-serif',
  headings: {
    fontFamily:
      '"Fraunces", "Georgia", "Times New Roman", serif',
    fontWeight: '600',
  },
  defaultRadius: 'md',
  black: '#0b1413',
  white: '#e8f4f3',
  other: {
    brandTeal: '#0e7d79',
  },
});
