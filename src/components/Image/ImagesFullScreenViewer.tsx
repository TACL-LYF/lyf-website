import React from "react"
import { AppBar, Dialog, IconButton, Toolbar } from "@mui/material"
import { ChevronLeft, ChevronRight, Close } from "@mui/icons-material"
import { useSpringCarousel } from "react-spring-carousel"
import Grid from "@mui/material/Unstable_Grid2/Grid2"

import { SanityType } from "@utils/typeUtils"
import SanityImage from "./SanityImage"

type ImagesFullScreenViewerProps = {
  open: boolean
  setOpen: React.Dispatch<boolean>
  initialIndex: number
  images: SanityType<readonly SanityType<Queries.SanityImageAssetFragment>[]>
}

export default function ImagesFullScreenViewerProps({
  open,
  setOpen,
  initialIndex,
  images,
}: ImagesFullScreenViewerProps) {
  if (!images || images.length <= 0) {
    return <></>
  }

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      itemsPerSlide: 1,
      initialActiveItem: initialIndex,
      withLoop: true,
      items: images.map((image, index) => ({
        id: image?._key || `fullscreen-${index}`,
        renderItem: <SanityImage imageAsset={image} hasRoundedCorners />,
      })),
    })

  const handleClose = () => setOpen(false)

  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      {/* Toolbar at the top */}
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Viewer */}
      <Grid
        container
        alignItems="stretch"
        sx={{
          width: 1,
          height: 1,
        }}
      >
        <Grid xs={false} sm={1}>
          <IconButton onClick={slideToPrevItem}>
            <ChevronLeft />
          </IconButton>
        </Grid>

        <Grid xs={12} sm={10}>
          {carouselFragment}
        </Grid>

        <Grid xs={false} sm={1}>
          <IconButton onClick={slideToNextItem}>
            <ChevronRight />
          </IconButton>
        </Grid>
      </Grid>
    </Dialog>
  )
}
