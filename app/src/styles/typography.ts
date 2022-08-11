import palette from './palette';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'text-lg': true;
    'text-md': true;
    'text-sm': true;
    'button-lg': true;
    'button-sm': true;
    'caption-lg': true;
    'caption-sm': true;
  }
}

export default {
  useNextVariants: true,
  fontFamily: ['Mulish', 'sans-serif'].join(','),
  h1: {
    fontFamily: 'Coolvetica, sans-serif',
    fontSize: '1.875rem',
    lineHeight: '2.25rem',
    fontWeight: 400,
  },
  h2: {
    fontFamily: 'Coolvetica, sans-serif',
    fontSize: '1.5rem',
    lineHeight: '1.8125rem',
    fontWeight: 400,
  },
  h3: {
    fontFamily: 'Coolvetica, sans-serif',
    fontSize: '1rem',
    lineHeight: '1.1875rem',
    fontWeight: 400,
  },
  h4: {
    fontFamily: 'Coolvetica, sans-serif',
    fontSize: '0.875rem',
    lineHeight: '1.05rem',
    fontWeight: 400,
  },
  'text-lg': {
    fontSize: '1rem',
    lineHeight: '1.375rem',
    fontWeight: 400,
  },
  'text-md': {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: 400,
  },
  'text-sm': {
    fontSize: '0.75rem',
    lineHeight: '1rem',
    fontWeight: 400,
  },
  'button-lg': {
    fontSize: '0.875rem',
    lineHeight: '1rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.2px',
  },
  'button-sm': {
    fontSize: '0.75rem',
    lineHeight: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.2px',
  },
  'caption-lg': {
    fontSize: '0.75rem',
    lineHeight: '1rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.2px',
  },
  'caption-sm': {
    fontSize: '0.625rem',
    lineHeight: '1rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.2px',
  },

  body1: {
    fontSize: '0.875rem',
  },
  body2: {
    fontSize: '0.625rem',
  },
  text1: {
    fontSize: '0.75rem',
    fontWeight: 600,
  },
  overline: {
    color: palette.primary.light,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.4,
  },
};
