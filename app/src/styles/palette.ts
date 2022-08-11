import { grey } from '@mui/material/colors';
import {
  Palette,
  PaletteOptions,
  TypeBackground,
  TypeText,
} from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    border: {
      default: string;
    };
  }
  interface PaletteOptions {
    border: {
      default: string;
    };
  }
  interface TypeBackground {
    secondary: string;
  }
  interface TypeText {
    dark80: string;
  }
}

export default {
  red: '#8e1a1c',
  orange: '#f39410',
  green: '#6daf57',
  darkBlue: '#303668',
  lightBlue: '#0d92dd',

  text: {
    primary: '#23001e',
    dark80: '#4C2947',
    secondary: '#545c64',
  },
  border: {
    default: '#d3ccd2',
  },
  background: {
    default: '#ffffff',
    secondary: '#a799a5',
    paper: '#f8f7f8',
  },
  primary: {
    main: '#23001e',
    light: '#95b0bf',
  },
  secondary: {
    main: '#c0d869',
    dark: '#6daf57',
    contrastText: '#ffffff',
  },
  grey: {
    ...grey,
    350: '#c4c4c4',
    750: '#545c64',
    100: '#f6f6f6',
    med: '#dcdddd',
  },
};
