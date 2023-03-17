import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Stack, Typography } from "@mui/material"

import { Section } from "@components/Layout"
import getPageTitle from "@utils/getPageTitle"

export const query = graphql`
  query JoinOurTeamPage {
    sanityJoinOurTeamPage {
      mainHeader
      subHeader
    }
  }
`

export const Head = getPageTitle("Join Our Team")

export default function JoinOurTeamPage({
  data,
}: PageProps<Queries.JoinOurTeamPageQuery>) {
  const { sanityJoinOurTeamPage } = data
  if (!sanityJoinOurTeamPage)
    throw `No Sanity document for the culture page was found.`

  return (
    <>
      <Section>
        <Stack>
          <Typography variant="h3">
            {sanityJoinOurTeamPage?.mainHeader}
          </Typography>
          <Typography variant="h6">
            {sanityJoinOurTeamPage?.subHeader}
          </Typography>
        </Stack>
      </Section>
    </>
  )
}
