import * as React from "react"
import { PageProps, graphql } from "gatsby"

export const query = graphql`
  query HistoryPage {
    sanityHomePage {
      _id
    }
  }
`

export default function HistoryPage({}: PageProps<Queries.HistoryPageQuery>) {
  return (<></>)
}
