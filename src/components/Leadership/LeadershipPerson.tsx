import React from "react"

import { graphql } from "gatsby"
import { Stack, Typography } from "@mui/material"

import { SanityType } from "@utils/typeUtils"
import { PortraitImage } from "@components/Image"

export const sanityLeadershipPersonFragment = graphql`
  fragment SanityLeadershipPerson on SanityPerson {
    name
    position
    propic {
      ...SanityImageAsset
    }
  }
`

type LeadershipPersonProps = {
  person: SanityType<Queries.SanityLeadershipPersonFragment>,
  backgroundColor: string
}

export default function LeadershipPerson({person, backgroundColor}: LeadershipPersonProps) {
  return (
    <Stack>
      <PortraitImage imageAsset={person?.propic} backgroundColor={backgroundColor} />
      <Typography variant="h6">{person?.name}</Typography>
      <Typography variant="h6" color="gray">{person?.position}</Typography>
    </Stack>
  )
}