import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Stack, Typography, useTheme } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"

import getPageTitle from "@utils/getPageTitle"
import { Section } from "@components/Layout"
import { PortraitImage } from "@components/Image"
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
            ...SanityLeadershipPerson
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
  if (!sanityLeadershipPage)
    throw `No Sanity document for the leadership page was found.`

  const leadership = sanityLeadershipPage.leadership
  if (!leadership) throw `No leadership linked to this page.`

  const theme = useTheme()
  const alternatingColors = [theme.palette.primary.main, theme.palette.secondary.main, theme.palette.tertiary.main]

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
        <Stack spacing={4}>
          {leadership.committees?.map((committee, index) => (
            <Committee
              name={committee?.name}
              // @ts-ignore Trying to make this a valid type is a pain.
              members={committee?.members}
              backgroundColor={alternatingColors[index % 3]}
              key={committee?.name}
            />
          ))}
        </Stack>
      </Section>
    </>
  )
}
