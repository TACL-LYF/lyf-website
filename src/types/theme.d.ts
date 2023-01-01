import { PaletteColorOptions } from "@mui/material"

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"]
  }

  interface PaletteOptions {
    tertiary: PaletteOptions["primary"]
  }
}
