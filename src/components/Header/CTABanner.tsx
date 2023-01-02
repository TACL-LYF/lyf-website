import React from "react"

import { AppBar, Container, Stack, Toolbar } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"

import { LinkWithIcon } from "@components/Link"

export default function CTABanner() {
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
          <LinkWithIcon
            href={ctaLink || undefined}
            text={ctaText}
            color="inherit"
            underline="hover"
            justifyContent="center"
          />
        </Container>
      </Toolbar>
    </AppBar>
  )
}
