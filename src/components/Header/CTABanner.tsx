import React from "react"

import { AppBar, Container, Link, Toolbar } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { animated } from "@react-spring/web"

import useBoop from "@hooks/useBoop"

type CTABannerProps = {
  text: string
  href: string
}

const AnimatedIcon = animated(ArrowForwardIcon)

export default function CTABanner({ text, href }: CTABannerProps) {
  const [boopStyles, trigger] = useBoop({ x: 3, scale: 1.1 })

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Container maxWidth="sm">
          <Link href={href} color="inherit" onMouseEnter={trigger}>
            <Grid container justifyContent="center">
              <Grid>{text}</Grid>
              <Grid>
                <AnimatedIcon style={boopStyles} fontSize="small"/>
              </Grid>
            </Grid>
          </Link>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
