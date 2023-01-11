import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Stack, Typography } from "@mui/material"

import { Section } from "@components/Layout"

export const query = graphql`
  query HistoryPage {
    sanityHistoryPage {
      mainHeader
      subHeader
    }
  }
`

export default function HistoryPage({
  data,
}: PageProps<Queries.HistoryPageQuery>) {
  const { sanityHistoryPage } = data
  if (!sanityHistoryPage)
    throw `No Sanity document for the culture page was found.`

  return (
    <>
      <Section>
        <Stack>
          <Typography variant="h3">{sanityHistoryPage?.mainHeader}</Typography>
          <Typography variant="h6">{sanityHistoryPage?.subHeader}</Typography>
        </Stack>
      </Section>
    </>
  )
}
