import { createTheme } from '@mui/material/styles';

const OpenSans = "'Open Sans', sans-serif";
const Roboto = "'Roboto', sans-serif";
const Rubik = "'Rubik Mono One', monospace";


export const ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D97B66',
    },
    secondary: {
      main: '#66c4d9',
    },
    error: {
      main: '#a7bdf9',
    },
    background: {
      default: '#014034',
    },
  },
  typography: {
    fontFamily: OpenSans,
    h1: {
      fontFamily: Rubik,
    },
    button: {
      fontFamily: Roboto,
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 15,
  },
  props: {
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
    MuiTooltip: {
      arrow: true,
    },
  },
  spacing: 3,
});
