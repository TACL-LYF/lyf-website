import * as React from "react"
import { PageProps, graphql } from "gatsby"
import { Stack, Typography } from "@mui/material"

import { Section } from "@components/Layout"
import getPageTitle from "@utils/getPageTitle"
import PortableText from "@components/PortableText"

export const query = graphql`
  query CulturePage {
    sanityCulturePage {
      mainHeader
      _rawSubHeader
    }
  }
`

export const Head = getPageTitle("Culture")

export default function CulturePage({
  data,
}: PageProps<Queries.CulturePageQuery>) {
  const { sanityCulturePage } = data

  if (!sanityCulturePage)
    throw `No Sanity document for the culture page was found.`

  return (
    <>
      <Section>
        <Stack>
          <Typography variant="h3">{sanityCulturePage?.mainHeader}</Typography>
          <PortableText content={sanityCulturePage?._rawSubHeader}/>
        </Stack>
      </Section>
    </>
  )
}
