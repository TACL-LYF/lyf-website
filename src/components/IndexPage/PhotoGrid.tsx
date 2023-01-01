import * as React from "react"
import { Box, Stack } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import SanityImage from "@components/Image/SanityImage"

const ColoredBar = ({ color }: { color: string }) => (
  <Box
    sx={(theme) => ({
      backgroundColor: `${color}.main`,
      borderRadius: 1,
      width: "100%",
      height: theme.spacing(1),
    })}
  />
)

type PhotoGridProps = {
  photos:
    | readonly (Queries.SanityImageAssetFragment | null)[]
    | null
    | undefined
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  if (!photos) {
    return <></>
  }

  // Assume we're given 6 photos.
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      spacing={3}
    >
      <Grid xs={0} md={3}>
        <Stack spacing={1}>
          <SanityImage imageAsset={photos[0]} />
          <ColoredBar color="primary" />
        </Stack>
      </Grid>
      <Grid xs={5} md={3}>
        <Stack spacing={1}>
          <SanityImage imageAsset={photos[1]} />
          <ColoredBar color="secondary" />
          <SanityImage imageAsset={photos[2]} />
        </Stack>
      </Grid>

      <Grid xs={5} md={3}>
        <Stack spacing={1}>
          <SanityImage imageAsset={photos[4]} />
          <ColoredBar color="tertiary" />
          <SanityImage imageAsset={photos[3]} />
        </Stack>
      </Grid>
      <Grid xs={0} md={3}>
        <Stack spacing={1}>
          <ColoredBar color="primary" />
          <SanityImage imageAsset={photos[5]} />
        </Stack>
      </Grid>
    </Grid>
  )
}
