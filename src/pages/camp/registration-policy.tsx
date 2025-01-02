import React from "react"
import { graphql, PageProps } from "gatsby"
import getPageTitle from "@utils/getPageTitle"
import { Section } from "@components/Layout"
import { Typography } from "@mui/material"
import PortableText from "@components/PortableText"

export const query = graphql`
  query RegistrationPolicyPage {
    sanityRegistrationPolicyPage {
      mainHeader
      _rawMainContent
    }
  }
`

export const Head = getPageTitle("Registration Policy")

export default function RegistrationPolicyPage({
  data,
}: PageProps<Queries.RegistrationPolicyPageQuery>) {
  const { sanityRegistrationPolicyPage } = data
  if (!sanityRegistrationPolicyPage)
    throw `No Sanity document for the registration policy page was found.`

  const { mainHeader, _rawMainContent } = sanityRegistrationPolicyPage

  return (
    <>
      <Section backgroundColor="secondary.light">
        <Typography variant="h3">{mainHeader}</Typography>
      </Section>
      <Section maxWidth="lg">
        <PortableText content={_rawMainContent} gap={1} />
      </Section>
    </>
  )
}
