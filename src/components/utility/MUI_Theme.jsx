import { createTheme } from "@mui/material/styles";
import darkScrollbar from "@mui/material/darkScrollbar";

const OpenSans = "'Open Sans', sans-serif";
const Roboto = "'Roboto', sans-serif";
const Rubik = "'Rubik Mono One', monospace";
const Noto = "'Noto Sans', sans-serif"

export const ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d97b66",
    },
    secondary: {
      main: "#ce93d8",
    },
    background: {
      default: "#282c34",
      paper: "#3D3D3D",
    },
  },
  typography: {
    fontFamily: Noto,
    button: {
      fontWeight: "600",
      letterSpacing: "2px",
      fontSize: "1.2rem",
      // textTransform: 'capitalize',
    },
  },
  shape: {
    borderRadius: 15,
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
  spacing: 3,
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
      }),
    },
  },
});
