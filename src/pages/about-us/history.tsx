import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Stack, Typography, useTheme, Grid } from "@mui/material"

import { Section } from "@components/Layout"
import getPageTitle from "@utils/getPageTitle"
import SanityImage from "@components/Image/SanityImage"
import PortableText from "@components/PortableText"

export const query = graphql`
  query HistoryPage {
    sanityHistoryPage {
      mainHeader
      subHeader
      headerImage {
        ...SanityImageAsset
      }
      timeline {
        title
        _rawDescription
        image {
          ...SanityImageAsset
        }
      }
    }
  }
`

export const Head = getPageTitle("History")

export default function HistoryPage({
  data,
}: PageProps<Queries.HistoryPageQuery>) {
  const { sanityHistoryPage } = data
  if (!sanityHistoryPage)
    throw `No Sanity document for the culture page was found.`

  // for later:
  // const theme = useTheme()
  // const matches = useMediaQuery(theme.breakpoints.up("md"))

  const { timeline } = sanityHistoryPage

  const renderTimeline = () => {
    return timeline ? (
      <div>
        <Stack>
          {timeline.map((element, index) => {
            const card = (
              <Grid item xs={5}>
                <Typography variant="h6">{element?.title}</Typography>
                <SanityImage imageAsset={element?.image} />
                <PortableText content={element?._rawDescription} />
              </Grid>
            )
            const whitespace = <Grid item xs={5} />
            return (
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={8}
              >
                {index % 2 == 1 && card}
                {whitespace}
                {index % 2 == 0 && card}
              </Grid>
            )
          })}
        </Stack>
      </div>
    ) : null
  }

  const { headerImage } = sanityHistoryPage

  return (
    <>
      {/* Header Section */}
      <Section backgroundColor="primary.main">
        <Stack direction="row" spacing={4}>
          <Stack spacing={4} justifyContent="center">
            <Typography variant="h3" color="white">
              {sanityHistoryPage?.mainHeader}
            </Typography>
            <Typography variant="h6" color="white">
              {sanityHistoryPage?.subHeader}
            </Typography>
          </Stack>
          <SanityImage imageAsset={headerImage} />
        </Stack>
      </Section>
      {/* Timeline */}
      <Section backgroundColor="white">{renderTimeline()}</Section>
    </>
  )
}
