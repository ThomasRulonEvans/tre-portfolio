import { createTheme } from '@mantine/core';
import type { MantineColorsTuple } from '@mantine/core';

const teal: MantineColorsTuple = [
  '#e6f5f4',
  '#c2e6e4',
  '#9ad6d3',
  '#6fc4c0',
  '#4ab5b0',
  '#2a9e99',
  '#0e7d79',
  '#0b6a67',
  '#085754',
  '#054341',
];

export const theme = createTheme({
  primaryColor: 'teal',
  colors: {
    teal,
  },
  fontFamily: 'Outfit, sans-serif',
  headings: {
    fontFamily: 'Syne, sans-serif',
    fontWeight: '700',
  },
  defaultRadius: 'md',
  white: '#f7fbfb',
});
