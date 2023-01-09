import * as React from "react"
import { PageProps, graphql } from "gatsby"

export const query = graphql`
  query CookbookPage {
    sanityHomePage {
      _id
    }
  }
`

export default function CookbookPage({}: PageProps<Queries.CookbookPageQuery>) {
  return (<></>)
}
