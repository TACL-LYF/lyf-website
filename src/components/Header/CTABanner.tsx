import React from "react"

import {
  AppBar,
  Container,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { animated } from "@react-spring/web"
import { graphql, useStaticQuery } from "gatsby"

import useBoop from "@hooks/useBoop"

const AnimatedIcon = animated(ArrowForwardIcon)

export default function CTABanner() {
  const [boopStyles, trigger] = useBoop({ x: 3, scale: 1.1 })
  const { sanitySiteSettings } = useStaticQuery<Queries.CTABannerQuery>(graphql`
    query CTABanner {
      sanitySiteSettings {
        ctaText
        ctaLink
      }
    }
  `)

  if (!sanitySiteSettings?.ctaText) {
    return <></>
  }

  const { ctaLink, ctaText } = sanitySiteSettings

  return (
    <AppBar position="static" color="secondary">
      <Toolbar variant="dense">
        <Container maxWidth="sm">
          <Link
            href={ctaLink ? ctaLink : undefined}
            color="inherit"
            onMouseEnter={trigger}
          >
            <Stack direction="row" justifyContent="center">
              <Typography variant="body1">{ctaText}</Typography>
              <AnimatedIcon style={boopStyles} fontSize="small" />
            </Stack>
          </Link>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
