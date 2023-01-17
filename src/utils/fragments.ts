import { graphql } from "gatsby"

// Note not all fragments are defined in this file. Fragments that
// are more closely tied to an actual component, like SanityButton,
// are included in their respective component file.

export const cardFragment = graphql`
  fragment SanityCard on SanityCard {
    _key
    title
    image {
      ...SanityImageAsset
    }
    _rawDescription
    button {
      ...SanityButton
    }
  }
`
