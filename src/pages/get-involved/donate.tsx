import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Card, CardContent, CardHeader, Stack, Typography } from "@mui/material"
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

// This should eventually be in the Sanity CMS as well.
const DONATION_AMOUNTS = [
  {
    amount: 500,
    description:
      "Cover the cost for one counselor to staff camp and lead campers",
  },
  {
    amount: 1000,
    description:
      "Sponsor one child who is qualified for financial aid to attend camp",
  },
  {
    amount: 10000,
    description:
      "Allow us to securely sign larger campsites to accommodate more campers ",
  },
  {
    amount: "Other",
    description: "Custom amount - any amount is greatly appreciated",
  },
]

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
              spacing={{ xs: 2, md: 5 }}
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
        <Grid container alignItems="stretch" rowSpacing={4} columnSpacing={2}>
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

          {/* Donation Amounts */}
          {DONATION_AMOUNTS.map(({ amount, description }) => (
            <Grid xs={6} md={3} key={amount}>
              <Card
                variant="outlined"
                sx={{
                  borderColor: "white",
                  borderRadius: 4,
                  backgroundColor: "tertiary.dark",
                  padding: 2,
                  height: 1,
                }}
              >
                <CardContent component={Stack} spacing={1}>
                  <Typography
                    variant="h4"
                    color="white"
                  >{`$${amount.toLocaleString()}`}</Typography>
                  <Typography variant="body1" color="white">
                    {description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}

          <Grid xs={12}>
            <SanityButton
              boopProps={{ scale: 1.1 }}
              content={sanityDonatePage.headerButton}
            />
          </Grid>

          <Grid xs={12} md={6}>
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
