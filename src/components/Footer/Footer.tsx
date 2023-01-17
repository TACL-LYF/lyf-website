import * as React from "react"
import { Box, Stack, Typography } from "@mui/material"
import { Instagram, Facebook } from "@mui/icons-material"
import Grid from "@mui/material/Unstable_Grid2"
import { Link } from "gatsby"

const FooterText = ({ text }: { text: string }) => (
  <Typography variant="h6" color="white">
    {text}
  </Typography>
)

const FooterLinks = [
  [
    {
      text: "About LYF",
      to: "/about-us/history",
    },
    {
      text: "About LYF",
      to: "/about-us/history",
    },
    {
      text: "About LYF",
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
      to: "/get-involved/cookbook",
    },
  ],
  [
    {
      text: "FAQs",
      to: "/camp/faqs",
    },
    {
      text: "About LYF",
      to: "/about-us/history",
    },
    {
      text: "About LYF",
      to: "/about-us/history",
    },
  ],
]

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ padding: { xs: 1, md: 6 }, backgroundColor: "black" }}
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
              <Instagram style={{ color: "white" }} />
              <Facebook style={{ color: "white" }} />
            </Stack>
            {/* Trademark */}
            <FooterText text="© 2023 TACL-LYF" />
          </Stack>
        </Grid>
        <Grid container xs={12} md={6} columnSpacing={6} rowSpacing={2}>
          {FooterLinks.map((link, i) => (
            <Grid key={`footerLinkStack-${i}`}>
              <Stack>
                {link.map(({ text, to }, j) => (
                  <Link to={to} key={`${to}-${j}`} style={{
                    textDecoration: "none"
                  }}>
                    <FooterText text={text} />
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}
