import * as React from "react"
import { Box, Stack } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import SanityImage from "@components/Image/SanityImage"
import { animated, useSprings, config } from "@react-spring/web"

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

const AnimatedStack = animated(Stack)

export default function PhotoGrid({ photos }: PhotoGridProps) {
  if (!photos) {
    return <></>
  }

  const [springs, _api] = useSprings(4, (i) => ({
    from: { y: -10, opacity: 0.88, scale: 1.01 },
    to: { y: 0, opacity: 1, scale: 1 },
    delay: i * 100,
    // loop: {
    //   reverse: true
    // },
    config: {
      mass: 5,
      tension: 200,
      friction: 15,
    },
  }))

  // Assume we're given 6 photos.
  return (
    <Grid container alignItems="center" justifyContent="center" spacing={3}>
      <Grid xs={0} sm={3}>
        <AnimatedStack spacing={1} style={springs[0]}>
          <SanityImage imageAsset={photos[0]} />
          <ColoredBar color="primary" />
        </AnimatedStack>
      </Grid>
      <Grid xs={5} sm={3}>
        <AnimatedStack spacing={1} style={springs[1]}>
          <SanityImage imageAsset={photos[1]} />
          <ColoredBar color="secondary" />
          <SanityImage imageAsset={photos[2]} />
        </AnimatedStack>
      </Grid>

      <Grid xs={5} sm={3}>
        <AnimatedStack spacing={1} style={springs[2]}>
          <SanityImage imageAsset={photos[4]} />
          <ColoredBar color="tertiary" />
          <SanityImage imageAsset={photos[3]} />
        </AnimatedStack>
      </Grid>
      <Grid xs={0} sm={3}>
        <AnimatedStack spacing={1} style={springs[3]}>
          <ColoredBar color="primary" />
          <SanityImage imageAsset={photos[5]} />
        </AnimatedStack>
      </Grid>
    </Grid>
  )
}
