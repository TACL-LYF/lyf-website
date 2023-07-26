import React from "react"
import {
  AppBar,
  Dialog,
  DialogContent,
  IconButton,
  Toolbar,
} from "@mui/material"
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

const Carousel = ({
  images,
  initialIndex,
}: Pick<ImagesFullScreenViewerProps, "images" | "initialIndex">) => {
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

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
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

      <Grid xs={12} sm={10} sx={{ overflow: "hidden" }}>
        {carouselFragment}
      </Grid>

      <Grid xs={false} sm={1}>
        <IconButton onClick={slideToNextItem}>
          <ChevronRight />
        </IconButton>
      </Grid>
    </Grid>
  )
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

  const handleClose = () => setOpen(false)

  const [isMounted, setIsMounted] = React.useState(false)
  React.useEffect(() => setIsMounted(true), [])

  return (
    <Dialog fullScreen open={open} onClose={handleClose} keepMounted>
      {/* Toolbar at the top */}
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>

      <DialogContent>
        {/* Viewer */}
        {isMounted && <Carousel initialIndex={initialIndex} images={images} />}
      </DialogContent>
    </Dialog>
  )
}
