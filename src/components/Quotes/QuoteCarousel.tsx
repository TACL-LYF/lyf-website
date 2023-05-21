import React from "react"
import { Stack, useMediaQuery, useTheme } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { useSpringCarousel } from "react-spring-carousel"

import { SanityType } from "@utils/typeUtils"
import Quote from "./Quote"
import { AnimatedIconButton } from "@components/Button"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"

type QuoteCarousel = {
  quotes: SanityType<readonly SanityType<Queries.SanityQuoteFragment>[]>
  color: "primary" | "secondary" | "tertiary"
}

export default function QuoteCarousel({ quotes, color }: QuoteCarousel) {
  const theme = useTheme()
  const largeScreen = useMediaQuery(theme.breakpoints.up("md"))
  const [activeIndex, setActiveIndex] = React.useState(1)
  const numQuotes = quotes?.length || 0

  const {
    carouselFragment,
    slideToPrevItem,
    slideToNextItem,
    useListenToCustomEvent,
  } = useSpringCarousel({
    gutter: Number(theme.spacing(2).replace("px", "")), // remove the px from the spacing string
    itemsPerSlide: largeScreen ? 3 : 1,
    initialActiveItem: largeScreen ? 0 : 1,
    withLoop: true,
    shouldResizeOnWindowResize: true,
    items: quotes
      ? quotes.map((quote, index) => ({
          id: quote?._key || `quote-${index}`,
          renderItem: (
            <Quote
              content={quote}
              isSelected={index == activeIndex}
              color={color}
            />
          ),
        }))
      : [],
  })

  // Update the active quote
  useListenToCustomEvent((event) => {
    if (event.eventName === "onSlideStartChange") {
      setActiveIndex((event.nextItem.index + Number(largeScreen)) % numQuotes)
    }
  })

  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid
        xs={12}
        sx={{
          overflow: "hidden",
        }}
      >
        {carouselFragment}
      </Grid>
      <Grid xs={1}>
        <AnimatedIconButton
          boopProps={{ scale: 1.1 }}
          onClick={slideToPrevItem}
        >
          <ChevronLeft fontSize="large" />
        </AnimatedIconButton>
      </Grid>
      <Grid xs={1}>
        <AnimatedIconButton
          boopProps={{ scale: 1.1 }}
          onClick={slideToNextItem}
        >
          <ChevronRight fontSize="large" />
        </AnimatedIconButton>
      </Grid>
    </Grid>
  )
}
