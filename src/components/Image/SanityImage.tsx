import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image"
import { styled } from "@mui/material"

export const sanityImageFragment = graphql`
  fragment SanityImageAsset on SanityImage {
    asset {
      altText
      gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
    }
  }
`

const StyledGatsbyImage = styled(GatsbyImage)(({theme}) => ({
  borderRadius: theme.shape.borderRadius
}))

type SanityImageProps = Omit<GatsbyImageProps, "image" | "alt"> & {
  imageAsset: Queries.SanityImageAssetFragment
}

export default function SanityImage({imageAsset, ...rest}: SanityImageProps) {
  if (!imageAsset.asset?.gatsbyImageData) {
    return <></>
  }

  const {gatsbyImageData, altText} = imageAsset.asset
  return (
    <StyledGatsbyImage image={gatsbyImageData} alt={altText ? altText : ""} {...rest}/>
  )
}
