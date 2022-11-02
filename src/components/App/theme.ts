import { createTheme, responsiveFontSizes } from "@mui/material"

const theme = createTheme({
  shape: {
    borderRadius: 9
  }
})

export default responsiveFontSizes(theme)