import React from "react"
import { graphql, PageProps } from "gatsby"
import getPageTitle from "@utils/getPageTitle"
import { Section } from "@components/Layout"
import { Stack, Typography } from "@mui/material"
import PortableText from "@components/PortableText"

export const query = graphql`
  query FinancialAidPolicyPage {
    sanityFinancialAidPolicyPage {
      mainHeader
      _rawMainContent
      pdfDocument {
        asset {
          url
        }
      }
    }
  }
`

export const Head = getPageTitle("Financial Aid Policy")

export default function FinancialAidPolicyPage({
  data,
}: PageProps<Queries.FinancialAidPolicyPageQuery>) {
  const { sanityFinancialAidPolicyPage } = data
  if (!sanityFinancialAidPolicyPage)
    throw `No Sanity document for the financial aid policy page was found.`

  const { mainHeader, _rawMainContent, pdfDocument } =
    sanityFinancialAidPolicyPage

  return (
    <>
      <Section backgroundColor="secondary.light">
        <Typography variant="h3">{mainHeader}</Typography>
      </Section>
      <Section maxWidth="lg">
        <Stack spacing={4}>
          <PortableText content={_rawMainContent} gap={1} />
          <object
            data={pdfDocument?.asset?.url || undefined}
            type="application/pdf"
            height="1400vh"
          />
        </Stack>
      </Section>
    </>
  )
}
