import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Stack, Typography } from "@mui/material"

import { Section } from "@components/Layout"

export const query = graphql`
  query FAQsPage {
    sanityFaqPage {
      mainHeader
      subHeader
    }
  }
`

export default function FAQsPage({ data }: PageProps<Queries.FAQsPageQuery>) {
  const { sanityFaqPage } = data
  if (!sanityFaqPage) throw `No Sanity document for the culture page was found.`

  return (
    <>
      <Section>
        <Stack>
          <Typography variant="h3">{sanityFaqPage?.mainHeader}</Typography>
          <Typography variant="h6">{sanityFaqPage?.subHeader}</Typography>
        </Stack>
      </Section>
    </>
  )
}
