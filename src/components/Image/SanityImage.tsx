import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image"
import { styled } from "@mui/material"

export const sanityImageFragment = graphql`
  fragment SanityImageAsset on SanityImage {
    _key
    asset {
      altText
      gatsbyImageData(fit: FILLMAX, placeholder: BLURRED, formats: [AVIF, WEBP])
    }
    hotspot {
      x
      y
      height
      width
    }
  }
`

const StyledGatsbyImage = styled(GatsbyImage)(({theme}) => ({
  borderRadius: theme.shape.borderRadius * 4
}))

type SanityImageProps = Omit<GatsbyImageProps, "image" | "alt"> & {
  imageAsset: Queries.SanityImageAssetFragment | null | undefined,
  hasRoundedCorners?: boolean
}

export default function SanityImage({imageAsset, hasRoundedCorners = true, ...rest}: SanityImageProps) {
  if (!imageAsset?.asset?.gatsbyImageData) {
    return <></>
  }

  const {gatsbyImageData, altText} = imageAsset.asset
  const Component = hasRoundedCorners ? StyledGatsbyImage : GatsbyImage
  return (
    <Component image={gatsbyImageData} alt={altText ? altText : ""} {...rest}/>
  )
}
