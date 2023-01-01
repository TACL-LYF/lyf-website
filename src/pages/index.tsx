import * as React from "react"
import { Box, Container, Stack, Paper, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { graphql, PageProps } from "gatsby"

import { AnimatedButton } from "@components/Button"

import { PhotoGrid } from "@components/IndexPage"

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

export default function IndexPage({ data }: PageProps<Queries.IndexPageQuery>) {
  const { sanityHomePage } = data

  return (
    <Stack spacing={2} alignItems="stretch">
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
              {sanityHomePage?.mainHeader}
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
                {sanityHomePage?.subHeader}
              </Typography>
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
      <Container
        maxWidth={false}
        sx={{
          paddingLeft: { xs: 1, md: 10 },
          paddingRight: { xs: 1, md: 10 },
        }}
      >
        <PhotoGrid photos={sanityHomePage?.headerPhotos} />
      </Container>

      {/* Info */}
      <Paper
        sx={{
          backgroundColor: "secondary.light",
          padding: 10,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2}>
          <Typography variant="h3" textAlign="center">
            We are a lifelong Taiwanese American community in the Bay Area -
            built by the current generation of TAs for the next generation.
          </Typography>
          <Typography variant="body1" textAlign="center">
            Our mission is to develop the Taiwanese American community into
            whole person leaders through an understanding of heritage, self, and
            the world.
          </Typography>
          </Stack>
        </Container>
      </Paper>
    </Stack>
  )
}
