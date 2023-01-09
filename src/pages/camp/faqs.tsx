import * as React from "react"
import { PageProps, graphql } from "gatsby"

export const query = graphql`
  query FAQsPage {
    sanityHomePage {
      _id
    }
  }
`

export default function FAQsPage({}: PageProps<Queries.FAQsPageQuery>) {
  return (<></>)
}
