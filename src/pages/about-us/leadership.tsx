import * as React from "react"
import { PageProps, graphql } from "gatsby"

export const query = graphql`
  query LeadershipPage {
    sanityHomePage {
      _id
    }
  }
`

export default function LeadershipPage({}: PageProps<Queries.LeadershipPageQuery>) {
  return (<></>)
}
