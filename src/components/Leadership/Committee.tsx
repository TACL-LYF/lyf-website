import React from "react"
import { Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"

import { SanityType } from "@utils/typeUtils"
import LeadershipPerson from "./LeadershipPerson"

type CommitteeProps = {
  name: SanityType<string>
  members: SanityType<SanityType<Queries.SanityLeadershipPersonFragment>[]>
  backgroundColor: string
}

export default function Committee({
  name,
  members,
  backgroundColor,
}: CommitteeProps) {
  return (
    <Grid container rowSpacing={4} columnSpacing={4}>
      <Grid xs={12}>
        <Typography variant="h4">{name}</Typography>
      </Grid>
      {members?.map((member) => (
        <Grid xs={4} md={3} lg={2} key={member?.name}>
          <LeadershipPerson person={member} backgroundColor={backgroundColor} />
        </Grid>
      ))}
      <Grid></Grid>
    </Grid>
  )
}
