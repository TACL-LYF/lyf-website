import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Stack, Typography, useTheme } from "@mui/material"

import getPageTitle from "@utils/getPageTitle"
import { Section } from "@components/Layout"
import { Committee } from "@components/Leadership"

export const query = graphql`
  query LeadershipPage {
    sanityLeadershipPage {
      mainHeader
      subHeader
      leadership {
        committees {
          name
          members {
            name
            position
            propic {
              ...SanityImageAsset
            }
          }
        }
      }
    }
  }
`

export const Head = getPageTitle("Leadership")

export default function LeadershipPage({
  data,
}: PageProps<Queries.LeadershipPageQuery>) {
  const { sanityLeadershipPage } = data
  if (!sanityLeadershipPage || !sanityLeadershipPage?.leadership)
    throw `No Sanity document for the leadership page was found.`

  return (
    <>
      {/* Header Section */}
      <Section backgroundColor="tertiary.main">
        <Stack spacing={5}>
          <Typography variant="h3" color="white" textAlign="center">
            {sanityLeadershipPage?.mainHeader}
          </Typography>
          <Typography variant="h6" color="white" textAlign="center">
            {sanityLeadershipPage?.subHeader}
          </Typography>
        </Stack>
      </Section>

      {/* Leadership */}
      <Section>
      </Section>
    </>
  )
}
