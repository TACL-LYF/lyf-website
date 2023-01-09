import * as React from "react"
import { PageProps, graphql } from "gatsby"

export const query = graphql`
  query CulturePage {
    sanityHomePage {
      _id
    }
  }
`

export default function CulturePage({}: PageProps<Queries.CulturePageQuery>) {
  return (<></>)
}
