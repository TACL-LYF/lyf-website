import React from "react"
import { Box } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { animated, config, useSprings, useTransition } from "@react-spring/web"

import { SanityType } from "@utils/typeUtils"
import { ImagesFullScreenViewer, SanityImage } from "@components/Image"

type ImageCarouselProps = {
  images:
    | readonly SanityType<Queries.SanityImageAssetFragment>[]
    | null
    | undefined
}

const MAX_DISPLAYED_IMAGES = 5
const AnimatedGrid = animated(Grid)
const AnimatedBox = animated(Box)

export default function ImageCarousel({ images }: ImageCarouselProps) {
  if (!images || images.length <= 0) {
    return <></>
  }

  // Set the main photo being displayed along with a fade-in and fade-out
  const [index, setIndex] = React.useState(0)
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
    config: {
      // We use a time-based configuration here because fade-in fade-out shouldn't wobble.
      duration: 200,
    },
  })

  // Set whether the full screen viewer is active.
  const [fullScreen, setFullScreen] = React.useState(false)

  // For each of the smaller thumbnails, we want to show some of them and they should have
  // hover effects to indicate you can click on them.
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null)
  const [springs, _api] = useSprings(
    MAX_DISPLAYED_IMAGES,
    (i) => ({
      opacity: hoverIndex === i ? 0.6 : 1,
      cursor: "pointer",
    }),
    [hoverIndex]
  )
  const numRemainingImages = Math.max(0, images.length - MAX_DISPLAYED_IMAGES)

  const openFullscreen = () => setFullScreen(true)

  return (
    // TODO: Add full-screen viewer
    <>
      <Grid container justifyContent="center" alignItems="stretch" spacing={1}>
        <Grid xs={12}>
          {transitions((style, i) => (
            <AnimatedBox style={style} onClick={openFullscreen}>
              <SanityImage imageAsset={images[i]} hasRoundedCorners />
            </AnimatedBox>
          ))}
        </Grid>
        {springs.map((styles, i) => (
          <AnimatedGrid
            xs={2}
            key={`image-carousel-${i}`}
            style={styles}
            onClick={() => setIndex(i)}
            onMouseEnter={() => setHoverIndex(i)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <SanityImage imageAsset={images[i]} hasRoundedCorners />
          </AnimatedGrid>
        ))}
        {numRemainingImages > 0 ? (
          <Grid xs={2}>
            {/* TODO: Add overlay */}
            <SanityImage
              imageAsset={images[MAX_DISPLAYED_IMAGES]}
              hasRoundedCorners
            />
          </Grid>
        ) : (
          <></>
        )}
      </Grid>

      <ImagesFullScreenViewer
        open={fullScreen}
        setOpen={setFullScreen}
        initialIndex={index}
        images={images}
      />
    </>
  )
}
