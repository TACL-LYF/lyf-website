import * as React from "react"
import { Box, Container, Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { graphql, PageProps } from "gatsby"

import { AnimatedButton } from "@components/Button"
import SanityImage from "@components/Image/SanityImage"

export const query = graphql`
  query IndexPage {
    sanityHomePage {
      mainHeader
      subHeader
      headerPhotos {
        ...SanityImageAsset
      }
    }
  }
`

const ColoredBar = ({ color }: { color: string }) => (
  <Box
    sx={(theme) => ({
      backgroundColor: `${color}.main`,
      borderRadius: 1,
      width: "100%",
      height: theme.spacing(1),
    })}
  />
)

export function PhotoGrid({
  photos,
}: {
  photos:
    | readonly (Queries.SanityImageAssetFragment | null)[]
    | null
    | undefined
}) {
  if (!photos) {
    return <></>
  }

  // Assume we're given 6 photos.
  return (
    <Grid
      container
      xs={12}
      alignItems="center"
      spacing={3}
      justifyContent="center"
    >
      <Grid xs={0} md={3}>
        <Stack spacing={1}>
          <SanityImage imageAsset={photos[0]} />
          <ColoredBar color="primary" />
        </Stack>
      </Grid>
      <Grid xs={5} md={3}>
        <Stack spacing={1}>
          <SanityImage imageAsset={photos[1]} />
          <ColoredBar color="secondary" />
          <SanityImage imageAsset={photos[2]} />
        </Stack>
      </Grid>

      <Grid xs={5} md={3}>
        <Stack spacing={1}>
          <SanityImage imageAsset={photos[4]} />
          <ColoredBar color="tertiary" />
          <SanityImage imageAsset={photos[3]} />
        </Stack>
      </Grid>
      <Grid xs={0} md={3}>
        <Stack spacing={1}>
          <ColoredBar color="primary" />
          <SanityImage imageAsset={photos[5]} />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default function IndexPage({ data }: PageProps<Queries.IndexPageQuery>) {
  const { sanityHomePage } = data

  return (
    <Stack>
      {/* Hero Section */}
      <Container
        maxWidth="xl"
        sx={{
          padding: 4,
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          rowGap={2}
        >
          {/* Header */}
          <Grid xs={6}>
            <Typography variant="h1">{sanityHomePage?.mainHeader}</Typography>
          </Grid>
          {/* SubHeader */}
          <Grid xs={4}>
            <Stack spacing={2} alignItems={{ xs: "center", md: "self-start" }}>
              <Typography variant="h4">{sanityHomePage?.subHeader}</Typography>
              <AnimatedButton
                boopProps={{ scale: 1.1 }}
                href="https://www.zeffy.com/en-US/ticketing/74df2944-47d2-4629-a3e3-0d8aa929fac3"
                variant="contained"
              >
                Register
              </AnimatedButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Hero Images */}
      <Container maxWidth="xl">
        <PhotoGrid photos={sanityHomePage?.headerPhotos} />
      </Container>
    </Stack>
  )
}
