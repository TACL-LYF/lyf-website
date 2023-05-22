import React from "react"

import { Box } from "@mui/material"
import useMeasure from "react-use-measure"

import { SanityType } from "@utils/typeUtils"
import YouTubeEmbed from "./YouTubeEmbed"

type CampOverlayVideoProps = {
  url: SanityType<string>
}

export default function CampOverlayVideo({ url }: CampOverlayVideoProps) {
  if (!url) {
    return <></>
  }
  const [ref, bounds] = useMeasure()
  return (
    <Box ref={ref} sx={{ width: 1, height: 1, borderRadius: 4 }}>
      <YouTubeEmbed url={url} />
    </Box>
  )
}
