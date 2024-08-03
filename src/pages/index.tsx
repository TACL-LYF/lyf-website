import * as React from "react"
import { Box, Container, Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { graphql, PageProps } from "gatsby"

import { AnimatedButton, SanityButton } from "@components/Button"

import { PhotoGrid, Goals, Statistics } from "@components/IndexPage"
import PortableText from "@components/PortableText"
import { LinkWithIcon } from "@components/Link"
import { FadeIn, Section } from "@components/Layout"
import { QuoteCarousel } from "@components/Quotes"
import { WholePersonLeadership } from "@components/WholePersonLeadership"
import getPageTitle from "@utils/getPageTitle"
import CampOverlayVideo from "@components/YouTubeEmbed/CampOverlayVideo"
import MailchimpSignupForm from "@components/Mailchimp/MailchimpSignupForm"

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
      campVideo
      goals
      stats {
        number
        decorator
        caption
      }
      quotes {
        ...SanityQuote
      }
      ctaHeader
      _rawCtaBody
      ctaLink {
        ...SanityButton
      }
    }
  }
`

export const Head = getPageTitle("Home")

export default function IndexPage({ data }: PageProps<Queries.IndexPageQuery>) {
  const { sanityHomePage } = data
  if (!sanityHomePage) throw `No Sanity document for the home page was found.`

  return (
    <Stack alignItems="stretch">
      {/* Hero Section */}
      <Section maxWidth="xxl">
        <Grid
          container
          justifyContent="space-between"
          flexWrap="wrap"
          spacing={2}
        >
          {/* Header */}
          <Grid xs={12} md={8}>
            <FadeIn translateX={-20}>
              <Typography
                variant="h1"
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
              >
                {sanityHomePage.mainHeader}
              </Typography>
            </FadeIn>
          </Grid>
          {/* SubHeader */}
          <Grid xs={12} md={4}>
            <FadeIn translateX={20}>
              <Stack
                spacing={2}
                alignItems={{ xs: "center", md: "self-start" }}
                sx={{ paddingTop: 4 }}
              >
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
                  size="large"
                >
                  Register
                </SanityButton>
              </Stack>
            </FadeIn>
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
        <FadeIn translateY={-20}>
          <Stack spacing={4} alignItems="center">
            <Typography variant="h3" textAlign="center">
              {sanityHomePage.aboutHeader}
            </Typography>
            <Container maxWidth="sm" sx={{ textAlign: "center" }}>
              <PortableText content={sanityHomePage._rawAboutBody} />
            </Container>
          </Stack>
        </FadeIn>
      </Section>

      {/* What is LYF Camp? */}
      <Section backgroundColor="#F2F2F2">
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid xs={12} lg={5}>
            <Stack spacing={{ xs: 4, lg: 8 }}>
              <FadeIn translateX={-20}>
                <Typography
                  variant="h3"
                  textAlign={{ xs: "center", md: "left" }}
                >
                  What is LYF Camp?
                </Typography>
              </FadeIn>

              <PortableText
                content={sanityHomePage._rawCampDescription}
                spacing={2}
              />
              <LinkWithIcon
                to="/camp/lyf-camp"
                text="Learn More"
                color="inherit"
                underline="hover"
                textAlign="left"
              />
            </Stack>
          </Grid>
          <Grid xs={12} lg={6}>
            <CampOverlayVideo url={sanityHomePage.campVideo} />
          </Grid>
        </Grid>
      </Section>

      {/* Goals of LYF Camp */}
      <Section>
        <Stack spacing={5}>
          <FadeIn translateX={-20}>
            <Typography variant="h3" textAlign={{ xs: "center", md: "left" }}>
              Goals of LYF Camp
            </Typography>
          </FadeIn>
          <Goals goals={sanityHomePage.goals} />
        </Stack>
      </Section>

      {/* Statistics */}
      <Section backgroundColor="tertiary.main">
        <Statistics stats={sanityHomePage?.stats} />
      </Section>

      {/* Whole Person Leadership */}
      <Section>
        <WholePersonLeadership />
      </Section>

      {/* Quotes and Mailchimp */}
      <Section>
        <QuoteCarousel quotes={sanityHomePage.quotes} color="tertiary" />
        <MailchimpSignupForm sx={{
          paddingTop: 4
        }}/>
      </Section>

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
              <AnimatedButton
                boopProps={{ scale: 1.1 }}
                variant="contained"
                href="https://www.facebook.com/groups/291534277601982"
              >
                Join Our Staff!
              </AnimatedButton>
            </Stack>
          </Section>
        </Grid>
      </Grid>
    </Stack>
  )
}
