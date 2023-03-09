import * as React from "react"
import {
  Box,
  Unstable_Grid2 as Grid,
  Stack,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material"
import SanityImage from "@components/Image/SanityImage"
import PortableText from "@components/PortableText"

type AlternatingContentGridProps = {
  content: readonly (Queries.SanityCardFragment | null)[] | null | undefined
}

const alternatingColors = ["primary.main", "secondary.main", "tertiary.main"]

export default function AlternatingContentGrid({
  content,
}: AlternatingContentGridProps) {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("lg"))
  if (!content) return <></>

  return (
    <Stack spacing={4} alignItems="stretch" justifyContent="center">
      {content.map((card, index) => {
        const color = alternatingColors[index % 3]
        const Image = (
          <SanityImage imageAsset={card?.image} style={{ width: "100%" }} />
        )
        const ColoredBar = <Box width={12} borderRadius={2} bgcolor={color} />

        return (
          <Grid
            container
            key={card?._key}
            alignItems="stretch"
            spacing={1}
            justifyContent="space-between"
          // justifyContent={index % 2 === 0 ? "flex-start" : "flex-end"}
          >
            {(index % 2 === 0 || !matches) && (
              <Grid xs={12} lg={6}>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="stretch"
                  justifyContent="flex-start"
                >
                  {ColoredBar}
                  {Image}
                </Stack>
              </Grid>
            )}
            <Grid
              xs={12}
              lg={6}
              alignSelf="center"
              justifySelf={index % 2 === 0 ? "end" : "start"}
            >
              <Stack padding={{ xs: 2, lg: 6 }} color="gray" spacing={2}>
                <Typography variant="h4">{card?.title}</Typography>
                <PortableText content={card?._rawDescription} />
              </Stack>
            </Grid>
            {index % 2 === 1 && matches && (
              <Grid xs={12} lg={6}>
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="stretch"
                  justifyContent="flex-end"
                >
                  {Image}
                  {ColoredBar}
                </Stack>
              </Grid>
            )}
          </Grid>
        )
      })}
    </Stack>
  )
}
