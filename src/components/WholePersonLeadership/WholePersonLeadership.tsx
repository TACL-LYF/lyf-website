import React from "react"
import { Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { Favorite, AutoAwesome, RocketLaunch } from "@mui/icons-material"
import { useTrail, useInView, animated } from "@react-spring/web"

import { FadeIn } from "@components/Layout"
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

const AnimatedGrid = animated(Grid)

export default function WholePersonLeadership({}: WholePersonLeadershipProps) {
  const [ref, inView] = useInView({ once: true })
  const [trails, __] = useTrail(
    wholePersonLeadership.length,
    () => ({
      translateY: inView ? 0 : -20,
      opacity: inView ? 1 : 0,
    }),
    [inView]
  )

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
            <FadeIn translateX={20}>
              Development through the Whole Person Leadership Model
            </FadeIn>
          </Typography>
          <Typography
            variant="h3"
            textAlign="center"
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <FadeIn translateX={-20}>
              Built by the current TA generation for the next generation
            </FadeIn>
          </Typography>
          <Stack spacing={5} padding={1} ref={ref}>
            {wholePersonLeadership.map(
              ({ Icon, color, name, description }, index) => (
                <AnimatedGrid
                  container
                  key={name}
                  columnSpacing={1}
                  rowSpacing={1}
                  style={trails[index]}
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
                </AnimatedGrid>
              )
            )}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
}
