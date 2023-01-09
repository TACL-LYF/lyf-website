import * as React from "react"
import { PageProps, graphql } from "gatsby"

export const query = graphql`
  query SupportLYFPage {
    sanityHomePage {
      _id
    }
  }
`

export default function SupportLYFPage({}: PageProps<Queries.SupportLYFPageQuery>) {
  return (<></>)
}
