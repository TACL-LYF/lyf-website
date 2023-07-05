import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { Section } from "@components/Layout"
import getPageTitle from "@utils/getPageTitle"
import { SanityButton } from "@components/Button"
import SanityImage from "@components/Image/SanityImage"
import PortableText from "@components/PortableText/PortableText"

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
      _rawDonationAmtBody
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
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={4}
        >
          {/* Header text + button */}
          <Grid xs={12} md={6} justifyContent="center" alignItems="center">
            <SanityImage imageAsset={sanityDonatePage.headerImage} />
          </Grid>
          <Grid xs={12} md={6}>
            <Stack
              spacing={{ xs: 2, md: 6 }}
              alignItems={{ xs: "center", md: "flex-start" }}
              sx={{ padding: 2 }}
            >
              <Typography variant="h3" color="black" textAlign="left">
                {sanityDonatePage?.mainHeader}
              </Typography>
              <Typography variant="body1" textAlign="left">
                {sanityDonatePage?.subHeader}
              </Typography>
              <SanityButton
                boopProps={{ scale: 1.1 }}
                content={sanityDonatePage.headerButton}
              />
            </Stack>
          </Grid>
        </Grid>
      </Section>
      {/* Donation amount section */}
      <Section backgroundColor="tertiary.dark">
        <Grid container alignItems="stretch" rowSpacing={4}>
          <Grid xs={12}>
            <Typography variant="h4" color="white">
              {sanityDonatePage?.donationAmtHeader}
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography variant="h6" color="white">
              {sanityDonatePage?.donationAmtSubHeader}
            </Typography>
          </Grid>
          <Grid xs={12}>
            <SanityButton
              boopProps={{ scale: 1.1 }}
              content={sanityDonatePage.headerButton}
            />
          </Grid>

          {/* Donation Amounts */}

          <Grid xs={6}>
            <PortableText
              content={sanityDonatePage?._rawDonationAmtBody}
              color="white"
            />
          </Grid>
        </Grid>
      </Section>
    </>
  )
}
