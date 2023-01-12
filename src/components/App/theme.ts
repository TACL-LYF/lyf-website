import { createTheme, PaletteColorOptions, responsiveFontSizes } from "@mui/material"

const TEAL: PaletteColorOptions = {
  main: '#29A19D',
  light: '#A2E8E5',
  dark: '#046A67'
}

const SAFFRON_YELLOW: PaletteColorOptions = {
  main: '#FFCA43',
  light: '#FFE6A7',
  dark: '#D09600',
}

const PINK: PaletteColorOptions = {
  main: '#E95984',
  light: '#FFC3DA',
  dark: '#DA0758',
}

const bodyFontFamily = {
  fontFamily: "Arial, sans-serif",
}

const theme = createTheme({
  palette: {
    primary: PINK,
    secondary: SAFFRON_YELLOW,
    tertiary: TEAL,
  },
  shape: {
    borderRadius: 4
  },
  typography: {
    fontFamily: '"Nunito", -apple-system, sans-serif',
    subtitle1: bodyFontFamily,
    body1: bodyFontFamily,
    body2: bodyFontFamily
  }
})

export default responsiveFontSizes(theme)
