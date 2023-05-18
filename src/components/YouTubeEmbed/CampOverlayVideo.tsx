import React from "react"

import { Box } from "@mui/material"
import useMeasure from "react-use-measure"

import YouTubeEmbed from "./YouTubeEmbed"
import "./YouTubeBorderRadius.css"

type CampOverlayVideoProps = {
  url: string
}

export default function CampOverlayVideo({ url }: CampOverlayVideoProps) {
  const [ref, bounds] = useMeasure()
  return (
    <Box ref={ref} sx={{ width: 1, height: 1, borderRadius: 4 }}>
      <YouTubeEmbed
        url={url}
        width={bounds.width}
        height={(bounds.width * 9) / 16}
        // Have to include both these classNames in order to add the rounded corners.
        className="inheritBorderRadius"
        iframeClassName="inheritBorderRadius"
      />
    </Box>
  )
}
