import {
  createTheme,
  PaletteColorOptions,
  responsiveFontSizes,
} from "@mui/material"

const TEAL: PaletteColorOptions = {
  main: "#29A19D",
  light: "#A2E8E5",
  dark: "#046A67",
  contrastText: "#FFFFFF",
}

const SAFFRON_YELLOW: PaletteColorOptions = {
  main: "#FFCA43",
  light: "#FFE6A7",
  dark: "#D09600",
}

const PINK: PaletteColorOptions = {
  main: "#E95984",
  light: "#FFC3DA",
  dark: "#DA0758",
  contrastText: "#FFFFFF",
}

const bodyFontFamily = {
  fontFamily: "Arial, sans-serif",
  lineHeight: "24px",
}

const theme = createTheme({
  palette: {
    primary: PINK,
    secondary: SAFFRON_YELLOW,
    tertiary: TEAL,
    gray: "#514B4D",
    offwhite: "#F8F2F4",
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: '"Nunito", -apple-system, sans-serif',
    h1: {
      fontWeight: 1000,
    },
    h2: {
      fontWeight: 1000,
    },
    h3: {
      fontWeight: 900,
    },
    h4: {
      fontWeight: 800,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    subtitle1: { letterSpacing: "0.15px", ...bodyFontFamily },
    subtitle2: { letterSpacing: "0.1px", ...bodyFontFamily },
    body1: { letterSpacing: "0.15px", ...bodyFontFamily },
    body2: { letterSpacing: "0.15px", ...bodyFontFamily },
    button: {
      textTransform: "capitalize",
      fontWeight: 700,
    },
  },
})

export default responsiveFontSizes(theme)
