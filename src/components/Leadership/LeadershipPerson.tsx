import React from "react"

import { graphql } from "gatsby"
import { Stack, Typography } from "@mui/material"
import SanityGatsbyImage from "gatsby-plugin-sanity-image"

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
  return (
    <Stack spacing={2}>
      {propic ? (
        <SanityGatsbyImage
          {...propic}
          width={200}
          height={200}
          // @ts-ignore Not sure why style isn't the right type here.
          style={{
            borderRadius: "50%",
            boxShadow: `8px 12px 0px ${backgroundColor}`
          }}
        />
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
