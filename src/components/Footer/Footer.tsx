import * as React from "react"
import { Box, Stack } from "@mui/material"
import { Instagram, Facebook } from "@mui/icons-material"
import LineIcon from "@components/Logo/LineIcon"
import Grid from "@mui/material/Unstable_Grid2"

import FooterText from "./FooterText"
import FooterLink from "./FooterLink"
import { AnimatedIconButton } from "@components/Button"

const FooterLinks = [
  [
    {
      text: "About LYF",
      to: "/camp/lyf-camp",
    },
    {
      text: "Culture",
      to: "/about-us/culture",
    },
    {
      text: "History of LYF",
      to: "/about-us/history",
    },
  ],
  [
    {
      text: "Support Us",
      to: "/get-involved/donate",
    },
    {
      text: "Get Involved",
      to: "/get-involved/join-our-team",
    },
    {
      text: "Cookbook",
      to: "/cookbook",
    },
  ],
  [
    {
      text: "FAQs",
      to: "/camp/faqs",
    },
    {
      text: "Leadership",
      to: "/about-us/leadership",
    },
    {
      text: "Contact Us",
      to: "/contact-us",
    },
  ],
]

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ padding: { xs: 3, md: 6 }, backgroundColor: "black" }}
    >
      <Grid container>
        <Grid xs={12} md={6}>
          <Stack justifyContent="space-between" spacing={3}>
            {/* Group together the text */}
            <Stack alignItems="flex-start">
              <FooterText text="Taiwanese American Citizens League" />
              <FooterText text="Leading Youth Forward" />
            </Stack>
            {/* Social Icons */}
            <Stack direction="row" spacing={2}>
              <AnimatedIconButton
                boopProps={{ scale: 1.05 }}
                href="https://lin.ee/8zWlnfM"
                sx={{
                  padding: 0,
                }}
              >
                <LineIcon style={{ color: "white" }} />
              </AnimatedIconButton>

              <AnimatedIconButton
                boopProps={{ scale: 1.05 }}
                href="https://www.instagram.com/tacllyf/"
                sx={{
                  padding: 0,
                }}
              >
                <Instagram style={{ color: "white" }} />
              </AnimatedIconButton>

              <AnimatedIconButton
                boopProps={{ scale: 1.05 }}
                href="https://www.facebook.com/tacl.lyf/"
                sx={{
                  padding: 0,
                }}
              >
                <Facebook style={{ color: "white" }} />
              </AnimatedIconButton>
            </Stack>
            {/* Trademark */}
            <FooterText text="© 2025 TACL-LYF" />
          </Stack>
        </Grid>
        <Grid container xs={12} md={6} columnSpacing={6} rowSpacing={2}>
          {FooterLinks.map((link, i) => (
            <Grid key={`footerLinkStack-${i}`} component={Stack}>
              {link.map(({ text, to }, j) => (
                <FooterLink to={to} key={`${to}-${j}`} text={text} />
              ))}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}
