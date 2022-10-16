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
  },
};

const mergedTheme = _.merge(theme);
const createdTheme = createTheme(mergedTheme);

export default createdTheme;
