import React from "react"

import { graphql } from "gatsby"
import { Box, Stack, Typography } from "@mui/material"
import SanityGatsbyImage from "gatsby-plugin-sanity-image"
import useMeasure from "react-use-measure"

import { SanityType } from "@utils/typeUtils"

export const sanityLeadershipPersonFragment = graphql`
  fragment SanityLeadershipPerson on SanityPerson {
    name
    position
    propic {
      ...ImageWithPreview
    }
  }
`

type LeadershipPersonProps = {
  person: SanityType<Queries.SanityLeadershipPersonFragment>
  backgroundColor: string
}

export default function LeadershipPerson({
  person,
  backgroundColor,
}: LeadershipPersonProps) {
  const propic = person?.propic
  const [ref, bounds] = useMeasure()

  return (
    <Stack spacing={2} ref={ref}>
      {propic ? (
        <Box sx={{
          position: "relative",
          width: bounds.width,
          height: bounds.width,
          display: "inline-block",
        }}>
          <Box
            sx={{
              width: 1,
              height: 1,
              position: "absolute",
              opacity: 1,
              borderRadius: "50%",
              boxShadow: `8px 12px 0px ${backgroundColor}`,
              top: 0,
              left: 0,
              zIndex: 0,
            }}
          />
          <SanityGatsbyImage
            {...propic}
            width={200}
            height={200}
            loading="lazy"
            style={{
              borderRadius: "50%",
              position: "absolute",
              boxShadow: `8px 12px 0px ${backgroundColor}`,
              top: 0,
              right: 0,
              width: "100%",
              height: "100%",
              zIndex: 100,
            }}
          />
        </Box>
      ) : (
        <></>
      )}
      <Typography variant="h5" textAlign="center" paddingTop={1}>
        {person?.name}
      </Typography>
      <Typography variant="h6" color="gray" textAlign="center">
        {person?.position}
      </Typography>
    </Stack>
  )
}
