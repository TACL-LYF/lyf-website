import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Stack, Typography } from "@mui/material"

import { Section } from "@components/Layout"
import getPageTitle from "@utils/getPageTitle"

export const query = graphql`
  query DonatePage {
    sanityDonatePage {
      mainHeader
      subHeader
    }
  }
`

export const Head = getPageTitle("Donate")

export default function DonatePage({
  data,
}: PageProps<Queries.DonatePageQuery>) {
  const { sanityDonatePage } = data
  if (!sanityDonatePage)
    throw `No Sanity document for the culture page was found.`

  return (
    <>
      <Section>
        <Stack>
          <Typography variant="h3">{sanityDonatePage?.mainHeader}</Typography>
          <Typography variant="h6">{sanityDonatePage?.subHeader}</Typography>
        </Stack>
      </Section>
    </>
  )
}
