import * as _ from 'lodash';
import { createTheme } from '@mui/material/styles';

import palette from './palette';
import typography from './typography';
import fonts from './fonts';

const theme = {
  palette,
  typography,
  shape: {
    borderRadius: '6px',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: fonts,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: palette.secondary.main,
          borderColor: palette.primary.light,
          padding: '2.5rem',
          '&$error': {
            color: palette.primary.main,
          },
        },
      },
    },
  },
};

const mergedTheme = _.merge(theme);
const createdTheme = createTheme(mergedTheme);

export default createdTheme;
