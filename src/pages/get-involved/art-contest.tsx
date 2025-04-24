import * as React from "react"
import { PageProps, graphql } from "gatsby"

import getPageTitle from "@utils/getPageTitle"
import { Section } from "@components/Layout"

export const Head = getPageTitle("Art Contest")

export default function ArtContestPage({ data }: PageProps) {
  return (
    <>
      {/* Header Image */}
      <Section backgroundColor="primary.main">Hello there</Section>
    </>
  )
}
