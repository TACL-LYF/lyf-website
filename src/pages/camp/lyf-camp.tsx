import * as React from "react"
import { PageProps, graphql } from "gatsby"

export const query = graphql`
  query LYFCampPage {
    sanityHomePage {
      _id
    }
  }
`

export default function LYFCampPage({}: PageProps<Queries.LYFCampPageQuery>) {
  return (<></>)
}
