import { PaletteColorOptions } from "@mui/material"

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"]
    gray: string,
  }

  interface PaletteOptions {
    tertiary: PaletteOptions["primary"]
    gray: string,
  }
}
