import * as React from "react"
import { Box, Container, Paper, Link, Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { graphql, PageProps } from "gatsby"

import { SanityButton } from "@components/Button"

import { PhotoGrid, Goals, Statistics } from "@components/IndexPage"
import PortableText from "@components/PortableText"
import { LinkWithIcon } from "@components/Link"
import { Section } from "@components/Layout"

export const query = graphql`
  query IndexPage {
    sanityHomePage {
      mainHeader
      subHeader
      subHeaderButton {
        ...SanityButton
      }
      headerPhotos {
        ...SanityImageAsset
      }
      aboutHeader
      _rawAboutBody
      _rawCampDescription
      goals
      stats {
        number
        decorator
        caption
      }
      ctaHeader
      _rawCtaBody
      ctaLink {
        ...SanityButton
      }
    }
  }
`

export default function IndexPage({ data }: PageProps<Queries.IndexPageQuery>) {
  const { sanityHomePage } = data
  if (!sanityHomePage) throw `No Sanity document for the home page was found.`

  return (
    <Stack alignItems="stretch">
      {/* Hero Section */}
      <Section maxWidth={false}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={2}
        >
          {/* Header */}
          <Grid xs={12} md={6}>
            <Typography
              variant="h1"
              textAlign={{
                xs: "center",
                md: "left",
              }}
            >
              {sanityHomePage.mainHeader}
            </Typography>
          </Grid>
          {/* SubHeader */}
          <Grid xs={12} md={5}>
            <Stack spacing={2} alignItems={{ xs: "center", md: "self-start" }}>
              <Typography
                variant="h4"
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
              >
                {sanityHomePage.subHeader}
              </Typography>

              <SanityButton
                boopProps={{ scale: 1.1 }}
                content={sanityHomePage.subHeaderButton}
              >
                Register
              </SanityButton>
            </Stack>
          </Grid>
        </Grid>
      </Section>

      {/* Hero Images */}
      <Section
        maxWidth={false}
        sx={{
          paddingTop: { xs: 0, md: 0 },
        }}
      >
        <PhotoGrid photos={sanityHomePage.headerPhotos} />
      </Section>

      {/* Info */}
      <Section
        backgroundColor="secondary.light"
        maxWidth="lg"
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <Stack spacing={4}>
          <Typography variant="h3" textAlign="center">
            {sanityHomePage.aboutHeader}
          </Typography>
          <PortableText content={sanityHomePage._rawAboutBody} />
        </Stack>
      </Section>

      {/* What is LYF Camp? */}
      <Section backgroundColor="#F2F2F2">
        <Grid container spacing={2} justifyContent="space-between">
          <Grid xs={12} md={4}>
            <Stack spacing={8}>
              <Typography variant="h3" textAlign={{ xs: "center", md: "left" }}>
                What is LYF Camp?
              </Typography>
              <PortableText
                content={sanityHomePage._rawCampDescription}
                spacing={2}
              />
              <LinkWithIcon
                to="/"
                text="Learn More"
                color="inherit"
                underline="hover"
                textAlign="left"
              />
            </Stack>
          </Grid>
          <Grid xs={12} md={6}>
            <Box
              sx={{ width: 1, height: 1, backgroundColor: "primary.main" }}
            ></Box>
          </Grid>
        </Grid>
      </Section>

      {/* Goals of LYF Camp */}
      <Section>
        <Stack spacing={5}>
          <Typography variant="h3" textAlign={{ xs: "center", md: "left" }}>
            Goals of LYF Camp
          </Typography>
          <Goals goals={sanityHomePage.goals} />
        </Stack>
      </Section>

      {/* Statistics */}
      <Section backgroundColor="tertiary.main">
        <Statistics stats={sanityHomePage?.stats} />
      </Section>
    </Stack>
  )
}
