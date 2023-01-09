import * as React from "react"
import { PageProps, graphql } from "gatsby"

export const query = graphql`
  query JoinOurTeamPage {
    sanityHomePage {
      _id
    }
  }
`

export default function JoinOurTeamPage({}: PageProps<Queries.JoinOurTeamPageQuery>) {
  return (<></>)
}
