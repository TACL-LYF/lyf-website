import React from "react"
import Grid from "@mui/material/Unstable_Grid2/Grid2"

import { SanityType } from "@utils/typeUtils"
import { SanityImage } from "@components/Image"

type ImageCarouselProps = {
  images:
    | readonly SanityType<Queries.SanityImageAssetFragment>[]
    | null
    | undefined
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  if (!images || images.length <= 0) {
    return <></>
  }

  const [index, setIndex] = React.useState(0)
  const displayedImages = images.slice(0, 5)
  const numRemainingImages = Math.max(0, images.length - displayedImages.length)

  return (
    // TODO: Add full-screen viewer
    <Grid container justifyContent="center" alignItems="stretch" spacing={1}>
      <Grid xs={12}>
        <SanityImage imageAsset={images[index]} hasRoundedCorners />
      </Grid>
      {displayedImages.map((imageAsset, i) => (
        <Grid xs={2} key={`image-carousel-${i}`}>
          <SanityImage imageAsset={imageAsset} hasRoundedCorners />
        </Grid>
      ))}
      {numRemainingImages > 0 ? (
        <Grid xs={2}>
          {/* TODO: Add overlay */}
          <SanityImage imageAsset={images[displayedImages.length]} hasRoundedCorners />{" "}
        </Grid>
      ) : (
        <></>
      )}
    </Grid>
  )
}
