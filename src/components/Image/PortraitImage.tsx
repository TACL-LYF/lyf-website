import React from "react"

import SanityImage from "./SanityImage"
import { SanityType } from "@utils/typeUtils"

type PortraitImageProps = {
  imageAsset: SanityType<Queries.SanityImageAssetFragment>,
  backgroundColor: string,

}

export default function PortraitImage({imageAsset, backgroundColor}: PortraitImageProps) {
  return (
    <SanityImage imageAsset={imageAsset} hasRoundedCorners={false} imgStyle={{
      borderRadius: "50%",
      height: "200px",
      width: "200px",
    }}/>
  )
}