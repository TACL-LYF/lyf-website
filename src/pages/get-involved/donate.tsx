import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { Section } from "@components/Layout"
import getPageTitle from "@utils/getPageTitle"
import { SanityButton } from "@components/Button"
import SanityImage from "@components/Image/SanityImage"

export const query = graphql`
  query DonatePage {
    sanityDonatePage {
      mainHeader
      subHeader
      headerImage {
        ...SanityImageAsset
      }
      headerButton {
        ...SanityButton
      }
      donationAmtHeader
      donationAmtSubHeader
    }
  }
`

export const Head = getPageTitle("Donate")

export default function DonatePage({
  data,
}: PageProps<Queries.DonatePageQuery>) {
  const { sanityDonatePage } = data
  if (!sanityDonatePage)
    throw `No Sanity document for the culture page was found.`

  return (
    <>
      {/* Header */}
      <Section backgroundColor="secondary.light">
        <Grid container justifyContent="space-between">
          {/* Header text + button */}
          <Grid
            md={6}
            sx={{ display: { xs: "none", md: "flex" } }}
            justifyContent="center"
            alignItems="center"
          >
            <SanityImage
              imageAsset={sanityDonatePage.headerImage}
            ></SanityImage>
          </Grid>
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
                {sanityDonatePage?.mainHeader}
              </Typography>
              <Typography
                variant="h6"
                color="black"
                textAlign={{ xs: "center", md: "left" }}
              >
                {sanityDonatePage?.subHeader}
              </Typography>
              <SanityButton
                boopProps={{ scale: 1.1 }}
                content={sanityDonatePage.headerButton}
              ></SanityButton>
            </Stack>
          </Grid>
        </Grid>
      </Section>
      {/* Donation amount section */}
      <Section backgroundColor="tertiary.dark">
        <Grid container alignItems="stretch" spacing={4}>
          <Grid xs={12}>
            <Stack spacing={6} alignItems="left">
              <Typography variant="h3" color="white">
                {sanityDonatePage?.donationAmtHeader}
              </Typography>
              <Typography variant="h6" color="white">
                {sanityDonatePage?.donationAmtSubHeader}
              </Typography>
            </Stack>
          </Grid>
          {/*donation amounts*/}
        </Grid>
      </Section>
    </>
  )
}
