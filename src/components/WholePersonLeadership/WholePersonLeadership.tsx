import React from "react"
import { Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { Favorite, AutoAwesome, RocketLaunch } from "@mui/icons-material"

import VennDiagram from "./VennDiagram"

type WholePersonLeadershipProps = {}

const wholePersonLeadership = [
  {
    Icon: Favorite,
    color: "primary",
    name: "Acceptance & Belonging",
    description: "A lifelong community of Taiwanese American friends",
  },
  {
    Icon: AutoAwesome,
    color: "secondary",
    name: "Identity & Development",
    description:
      "A safe space outside of school and family to be themselves and learn who they are",
  },
  {
    Icon: RocketLaunch,
    color: "tertiary",
    name: "Leadership",
    description:
      "A steady pipeline of leadership development opportunities to meet your kid where they’re at over the years",
  },
]

export default function WholePersonLeadership({}: WholePersonLeadershipProps) {
  return (
    <Grid container justifyContent="space-between">
      <Grid
        xs={12}
        lg={5}
        sx={{
          display: { xs: "none", lg: "block" },
        }}
      >
        {/* <Placeholder /> */}
        <VennDiagram />
      </Grid>
      <Grid
        xs={12}
        lg={6}
        sx={{
          padding: { xs: 0, lg: 4 },
        }}
      >
        <Stack spacing={2}>
          <Typography
            variant="h3"
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            Development through the Whole Person Leadership Model
          </Typography>
          <Typography
            variant="h3"
            textAlign="center"
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            Built by the current TA generation for the next generation
          </Typography>
          <Stack spacing={5}>
            {wholePersonLeadership.map(({ Icon, color, name, description }) => (
              <Grid
                container
                key={name}
                columnSpacing={1}
                rowSpacing={1}
              >
                <Grid>
                  {/* @ts-ignore Tertiary added via module augmentation but doesn't show up here. */}
                  <Icon color={color} fontSize="large" />
                </Grid>
                <Grid>
                  <Typography variant="h4" color={`${color}.main`}>
                    {name}
                  </Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography variant="body1">{description}</Typography>
                </Grid>
              </Grid>
            ))}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
}
