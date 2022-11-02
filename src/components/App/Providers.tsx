/**
 * Our component that handles globals and provides theme to the entire website.
 *
 * Used in wrapRootElement in gatsby-browser.ts and gatsby-ssr.ts
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React, { useEffect } from "react"
import { Globals } from "@react-spring/web"
import { ThemeProvider } from "@mui/material"

// Components
import theme from "./theme"

// Hooks
import usePrefersReducedMotion from "@hooks/usePrefersReducedMotion"

type Props = React.PropsWithChildren

export default function Providers({ children }: Props) {
  // If the user has "prefers reduced motion" on, then we want to respect
  // that setting and disable our animations.
  const prefersReducedMotion = usePrefersReducedMotion()
  useEffect(
    () => Globals.assign({ skipAnimation: prefersReducedMotion }),
    [prefersReducedMotion]
  )

  // Provide a custom theme for this app
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
