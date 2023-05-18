import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { Section } from "@components/Layout"
import getPageTitle from "@utils/getPageTitle"
import { CardWithMedia } from "@components/Card"
import { SanityButton } from "@components/Button"
import SanityImage from "@components/Image/SanityImage"

export const query = graphql`
  query JoinOurTeamPage {
    sanityJoinOurTeamPage {
      mainHeader
      subHeader
      headerImage {
        ...SanityImageAsset
      }
      headerButton {
        ...SanityButton
      }
      volunteerHeader
      volunteerSubHeader
      volunteerImpact {
        ...SanityCard
      }
      getInvolvedHeader
      getInvolvedSubHeader
      getInvolved {
        ...SanityCard
      }
      interestForm
      interestFormButton {
        ...SanityButton
      }
      upNext {
        ...SanityCard
      }
    }
  }
`

export const Head = getPageTitle("Join Our Team")

export default function JoinOurTeamPage({
  data,
}: PageProps<Queries.JoinOurTeamPageQuery>) {
  const { sanityJoinOurTeamPage } = data
  if (!sanityJoinOurTeamPage)
    throw `No Sanity document for the culture page was found.`

  return (
    <>
      {/* Header */}
      <Section backgroundColor="tertiary.light">
        <Grid container justifyContent="space-between">
          {/* Header text + button */}
          <Grid xs={12} md={6}>
            <Stack
              spacing={6}
              alignItems={{ xs: "center", md: "self-start" }}
              padding={{ xs: 2, lg: 12 }}
            >
              <Typography
                variant="h3"
                color="black"
                textAlign={{ xs: "center", md: "left" }}
              >
                {sanityJoinOurTeamPage?.mainHeader}
              </Typography>
              <Typography
                variant="h6"
                color="black"
                textAlign={{ xs: "center", md: "left" }}
              >
                {sanityJoinOurTeamPage?.subHeader}
              </Typography>
              <SanityButton
                boopProps={{ scale: 1.1 }}
                content={sanityJoinOurTeamPage.headerButton}
              ></SanityButton>
            </Stack>
          </Grid>
          <Grid
            md={6}
            sx={{ display: { xs: "none", md: "flex" } }}
            justifyContent="center"
            alignItems="center"
          >
            <SanityImage
              imageAsset={sanityJoinOurTeamPage.headerImage}
            ></SanityImage>
          </Grid>
        </Grid>
      </Section>
      {/* Why we volunteer section */}
      <Section backgroundColor="secondary.light">
        <Grid container alignItems="stretch" spacing={4}>
          <Grid xs={12}>
            <Stack spacing={6} alignItems="center">
              <Typography variant="h3" textAlign="center">
                {sanityJoinOurTeamPage?.volunteerHeader}
              </Typography>
              <Typography variant="h6" textAlign="center">
                {sanityJoinOurTeamPage?.volunteerSubHeader}
              </Typography>
            </Stack>
          </Grid>
          {sanityJoinOurTeamPage?.volunteerImpact?.map((card) => (
            <Grid key={card?._key} xs={12} md={4}>
              <CardWithMedia
                header={card?.title}
                image={card?.image}
                content={card?._rawDescription}
                button={card?.button}
                shadowColor="secondary"
              />
            </Grid>
          ))}
        </Grid>
      </Section>
      {/* How you can get involved section */}
      <Section backgroundColor="primary.light">
        <Grid container alignItems="stretch" spacing={4}>
          <Grid xs={12}>
            <Stack spacing={6} alignItems="center">
              <Typography variant="h3" textAlign="center">
                {sanityJoinOurTeamPage?.getInvolvedHeader}
              </Typography>
              <Typography variant="h6" textAlign="center">
                {sanityJoinOurTeamPage?.getInvolvedSubHeader}
              </Typography>
            </Stack>
          </Grid>
          {sanityJoinOurTeamPage?.getInvolved?.map((card) => (
            <Grid key={card?._key} xs={12} md={6}>
              <CardWithMedia
                header={card?.title}
                image={card?.image}
                content={card?._rawDescription}
                button={card?.button}
                shadowColor="primary"
              />
            </Grid>
          ))}
        </Grid>
      </Section>
      {/* Volunteer interest button section */}
      <Section>
        <Stack
          alignItems="center"
          spacing={4}
          justifyContent="center"
          sx={{
            height: 1,
          }}
        >
          <Typography variant="h4" textAlign="center">
            {sanityJoinOurTeamPage?.interestForm}
          </Typography>
          <SanityButton
            boopProps={{ scale: 1.1 }}
            content={sanityJoinOurTeamPage.interestFormButton}
          ></SanityButton>
        </Stack>
      </Section>
      {/* Up next section */}
      {/* TODO: I wasn't able to find off white in the theme, we should add it? */}
      <Section backgroundColor="#F8F2F4">
        <Grid container alignItems="stretch" spacing={4}>
          <Grid xs={12}>
            <Typography variant="h3" textAlign="left">
              Up Next
            </Typography>
          </Grid>
          {sanityJoinOurTeamPage?.upNext?.map((card) => (
            <Grid
              key={card?._key}
              xs={12}
              md={6}
              sx={{ height: "fit-content" }}
            >
              <CardWithMedia
                header={card?.title}
                image={card?.image}
                content={card?._rawDescription}
                button={card?.button}
                shadowColor="primary"
              />
            </Grid>
          ))}
        </Grid>
      </Section>
    </>
  )
}
