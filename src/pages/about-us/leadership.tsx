import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Stack, Typography } from "@mui/material"

import { Section } from "@components/Layout"

export const query = graphql`
  query LeadershipPage {
    sanityLeadershipPage {
      mainHeader
      subHeader
    }
  }
`

export default function LeadershipPage({
  data,
}: PageProps<Queries.LeadershipPageQuery>) {
  const { sanityLeadershipPage } = data
  if (!sanityLeadershipPage)
    throw `No Sanity document for the culture page was found.`

  return (
    <>
      <Section>
        <Stack>
          <Typography variant="h3">
            {sanityLeadershipPage?.mainHeader}
          </Typography>
          <Typography variant="h6">
            {sanityLeadershipPage?.subHeader}
          </Typography>
        </Stack>
      </Section>
    </>
  )
}
