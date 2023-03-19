import * as React from "react"
import { Box, Container, Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { Favorite, AutoAwesome, RocketLaunch } from "@mui/icons-material"
import { graphql, PageProps } from "gatsby"

import { AnimatedButton, SanityButton } from "@components/Button"

import { PhotoGrid, Goals, Statistics } from "@components/IndexPage"
import PortableText from "@components/PortableText"
import { LinkWithIcon } from "@components/Link"
import { Section } from "@components/Layout"
import { VennDiagram } from "@components/WholePersonLeadership"
import getPageTitle from "@utils/getPageTitle"

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

const wholePersonLeadership = [
  {
    Icon: Favorite,
    color: "primary",
    name: "Acceptance & Belonging",
    description: "A lifelong community of Taiwanese American friends",
  },
  {
    Icon: AutoAwesome,
    color: "secondary",
    name: "Identity & Development",
    description:
      "A safe space outside of school and family to be themselves and learn who they are",
  },
  {
    Icon: RocketLaunch,
    color: "tertiary",
    name: "Leadership",
    description:
      "A steady pipeline of leadership development opportunities to meet your kid where they’re at over the years",
  },
]

const Placeholder = () => (
  <Box
    sx={{
      width: 1,
      height: 1,
      backgroundColor: "primary.main",
      borderRadius: 5,
    }}
  />
)

export const Head = getPageTitle("Home")

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
              variant="h2"
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
        <Stack spacing={4} alignItems="center">
          <Typography variant="h3" textAlign="center">
            {sanityHomePage.aboutHeader}
          </Typography>
          <Container maxWidth="sm" sx={{ textAlign: "center" }}>
            <PortableText content={sanityHomePage._rawAboutBody} />
          </Container>
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
            <Placeholder />
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

      {/* Whole Person Leadership */}
      <Section>
        <Grid container justifyContent="space-between">
          <Grid
            xs={12}
            lg={5}
            sx={{
              display: { xs: "none", lg: "block" },
            }}
          >
            {/* <Placeholder /> */}
            <VennDiagram />
          </Grid>
          <Grid
            xs={12}
            lg={6}
            sx={{
              padding: { xs: 0, lg: 4 },
            }}
          >
            <Stack spacing={2}>
              <Typography
                variant="h3"
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                Development through the Whole Person Leadership Model
              </Typography>
              <Typography
                variant="h3"
                textAlign="center"
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                Built by the current TA generation for the next generation
              </Typography>
              <Stack spacing={5}>
                {wholePersonLeadership.map(
                  ({ Icon, color, name, description }) => (
                    <Grid
                      container
                      key={name}
                      columnSpacing={1}
                      rowSpacing={0}
                      sx={{
                        padding: 0,
                      }}
                    >
                      <Grid>
                        {/* @ts-ignore Tertiary added via module augmentation but doesn't show up here. */}
                        <Icon color={color} fontSize="large" />
                      </Grid>
                      <Grid>
                        <Typography variant="h4" color={`${color}.main`}>
                          {name}
                        </Typography>
                      </Grid>
                      <Grid xs={12}>
                        <Typography variant="body1">{description}</Typography>
                      </Grid>
                    </Grid>
                  )
                )}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Section>

      {/* Quotes TODO */}
      {/* <Section></Section> */}

      {/* CTAs */}
      <Grid container alignItems="stretch">
        <Grid xs={12} md={6}>
          <Section maxWidth="xs" backgroundColor="secondary.light">
            <Stack alignItems="center" spacing={2}>
              <Typography variant="h4" textAlign="center">
                {sanityHomePage.ctaHeader}
              </Typography>
              <PortableText
                textAlign="center"
                content={sanityHomePage._rawCtaBody}
              />
              <SanityButton
                isAnimated
                boopProps={{ scale: 1.1 }}
                content={sanityHomePage.ctaLink}
              />
            </Stack>
          </Section>
        </Grid>
        <Grid xs={12} md={6}>
          <Section
            maxWidth="xs"
            backgroundColor="secondary.main"
            sx={{
              height: 1,
            }}
          >
            <Stack
              alignItems="center"
              spacing={4}
              justifyContent="center"
              sx={{
                height: 1,
              }}
            >
              <Typography variant="h4" textAlign="center">
                Want to Get Involved?
              </Typography>
              <AnimatedButton boopProps={{ scale: 1.1 }} variant="contained">
                Join Our Staff!
              </AnimatedButton>
            </Stack>
          </Section>
        </Grid>
      </Grid>
    </Stack>
  )
}
