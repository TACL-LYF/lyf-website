import * as React from "react"
import { Container, Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { graphql, PageProps } from "gatsby"

import { AnimatedButton } from "@components/Button"

export const query = graphql`
  query IndexPage {
    sanityHomePage {
      mainHeader
      subHeader
      headerPhotos {
        asset {
          gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
        }
      }
    }
  }
`

export default function IndexPage({ data }: PageProps<Queries.IndexPageQuery>) {
  const { sanityHomePage } = data

  return (
    <>
      {/* Hero Section */}
      <Container
        maxWidth="xl"
        sx={{
          padding: 4,
        }}
      >
        <Grid container alignItems="center" justifyContent="space-between" flexWrap="wrap">
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
          {/* Photos */}
          <Grid xs={12}>

          </Grid>
        </Grid>
      </Container>
    </>
  )
}
