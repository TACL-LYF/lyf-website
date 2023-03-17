import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Stack, Typography } from "@mui/material"

import { Section } from "@components/Layout"
import getPageTitle from "@utils/getPageTitle"

export const query = graphql`
  query CookbookPage {
    sanityCookbookPage {
      mainHeader
      subHeader
    }
  }
`

export const Head = getPageTitle("Cookbook")

export default function CookbookPage({
  data,
}: PageProps<Queries.CookbookPageQuery>) {
  const { sanityCookbookPage } = data
  if (!sanityCookbookPage)
    throw `No Sanity document for the culture page was found.`

  return (
    <>
      <Section>
        <Stack>
          <Typography variant="h3">{sanityCookbookPage?.mainHeader}</Typography>
          <Typography variant="h6">{sanityCookbookPage?.subHeader}</Typography>
        </Stack>
      </Section>
    </>
  )
}
