import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Stack, Typography } from "@mui/material"

import { Section } from "@components/Layout"

export const query = graphql`
  query LYFCampPage {
    sanityLyfCampPage {
      mainHeader
      subHeader
    }
  }
`

export default function LYFCampPage({
  data,
}: PageProps<Queries.LYFCampPageQuery>) {
  const { sanityLyfCampPage } = data
  if (!sanityLyfCampPage)
    throw `No Sanity document for the culture page was found.`

  return (
    <>
      <Section>
        <Stack>
          <Typography variant="h3">{sanityLyfCampPage?.mainHeader}</Typography>
          <Typography variant="h6">{sanityLyfCampPage?.subHeader}</Typography>
        </Stack>
      </Section>
    </>
  )
}
