import * as React from "react"
import { Stack, Typography } from "@mui/material"
import { ChatBubble, Twitter, Psychology, Handshake } from "@mui/icons-material"
import Grid from "@mui/material/Unstable_Grid2"

type GoalsProps = {
  goals: readonly (string | null)[] | null
}

const icons = [
  <ChatBubble color="primary" fontSize="large" />,
  // @ts-ignore Color tertiary added in module augmentation but doesn't show up here.
  <Twitter color="tertiary" fontSize="large" />,
  <Psychology color="secondary" fontSize="large" />,
  <Handshake color="primary" fontSize="large" />,
]

export default function Goals({ goals }: GoalsProps) {
  if (!goals) {
    return <></>
  }

  // Assume we're given 6 photos.
  return (
    <Grid container justifyContent="space-between" alignItems="flex-start" spacing={2}>
      {goals.map((goal, index) => (
        <Grid xs={12} sm={6} md={2} key={goal}>
          <Stack spacing={1}>
            {icons[index % 5]}
            <Typography variant="h6">{goal}</Typography>
          </Stack>
        </Grid>
      ))}
    </Grid>
  )
}
