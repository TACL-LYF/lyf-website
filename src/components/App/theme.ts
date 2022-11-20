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


const theme = createTheme({
  palette: {
    primary: TEAL,
    secondary: PINK,
  },
  shape: {
    borderRadius: 4
  }
})

export default responsiveFontSizes(theme)