import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { ImageList, ImageListItem, Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { Section } from "@components/Layout"
import { Statistics } from "@components/IndexPage"
import SanityImage from "@components/Image/SanityImage"
import Event from "@components/Event"
import { AlternatingContentGrid, CardWithMedia } from "@components/Card"

export const query = graphql`
  query LYFCampPage {
    sanityLyfCampPage {
      mainHeader
      subHeader
      headerPhotos {
        ...SanityImageAsset
      }
      eventsToDisplay {
        ...SanityEvent
      }
      activities {
        ...SanityCard
      }
      community {
        ...SanityCard
      }
    }
    # We grab the statistics from the home page so we only need to input them once.
    sanityHomePage {
      stats {
        number
        decorator
        caption
      }
    }
  }
`

export default function LYFCampPage({
  data,
}: PageProps<Queries.LYFCampPageQuery>) {
  const { sanityLyfCampPage, sanityHomePage } = data
  if (!sanityLyfCampPage)
    throw `No Sanity document for the LYF camp page was found.`

  const { headerPhotos } = sanityLyfCampPage
  if (!headerPhotos) throw `No header photos for the LYF camp page were found.`

  return (
    <>
      {/* Hero Section */}
      <Section backgroundColor="tertiary.dark">
        <Grid container alignItems="center">
          {/* Images */}
          <Grid
            xs={6}
            sx={{
              display: { xs: "none", lg: "block" },
            }}
          >
            <ImageList variant="quilted" cols={2}>
              {headerPhotos.map((image, index) => (
                <ImageListItem
                  key={image?._key}
                  cols={1}
                  rows={index == 0 ? 2 : 1}
                >
                  <SanityImage imageAsset={image} />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
          <Grid xs={12} lg={6}>
            <Stack
              spacing={6}
              padding={{
                xs: 2,
                lg: 6,
              }}
            >
              <Typography variant="h3" color="white">
                {sanityLyfCampPage?.mainHeader}
              </Typography>
              <Typography variant="h6" color="white">
                {sanityLyfCampPage?.subHeader}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Section>

      {/* Statistics */}
      {sanityHomePage ? (
        <Section backgroundColor="tertiary.main">
          <Statistics stats={sanityHomePage?.stats} />
        </Section>
      ) : (
        <></>
      )}

      {/* Upcoming Events */}
      <Section>
        <Grid container alignItems="stretch" spacing={4}>
          <Grid xs={12}>
            <Typography variant="h4">Attend our upcoming events</Typography>
          </Grid>
          {sanityLyfCampPage?.eventsToDisplay?.map((event) => (
            <Grid xs={12} md={6} key={event?.id}>
              <Event content={event} />
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Activities */}
      <Section backgroundColor="secondary.light">
        <Grid container alignItems="stretch" spacing={4}>
          <Grid xs={12}>
          <Typography variant="h4">
            Find your voice in workshops and sing-alongs
          </Typography>
          </Grid>

          {sanityLyfCampPage?.activities?.map((activity) =>
            <Grid key={activity?._key} xs={12} md={4}>
            <CardWithMedia
              header={activity?.title}
              image={activity?.image}
              content={activity?._rawDescription}
              button={activity?.button}
              shadowColor="secondary"
            />
            </Grid>
          )}
        </Grid>
      </Section>

      {/* Community */}
      <Section>
        <Stack spacing={6}>
          <Typography variant="h4">
            Join a growing community of curious people
          </Typography>
          <AlternatingContentGrid content={sanityLyfCampPage?.community} />
        </Stack>
      </Section>
    </>
  )
}
