import * as React from "react"
import { Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { graphql } from "gatsby"
import { animated, useSpringValue, useInView, config } from "@react-spring/web"

export const statFragment = graphql`
  fragment Statistic on SanityStatistic {
    number
    decorator
    caption
  }
`

type StatProps = {
  number: number,
  decorator: string | null | undefined,
  caption: string | null | undefined,
}

const AnimatedNumber = animated(Typography)

const Stat = ({number, decorator, caption}: StatProps) => {
  const value = useSpringValue(0, {
    config: config.molasses
  })
  const [ref, inView] = useInView({once: true})
  React.useEffect(() => {
    value.start(inView ? number : 0)
  }, [inView])

  return (
  <Stack alignItems="center">
    <AnimatedNumber ref={ref} variant="h2" color="white">
      {value.to((num => `${num.toFixed(0)}${decorator || ""}`))}
    </AnimatedNumber>
    <Typography variant="h6" textAlign="center" color="white">
      {caption}
    </Typography>
  </Stack>
)}


type StatisticsProps = {
  stats: readonly (Queries.StatisticFragment | null)[] | null
}

export default function Statistics({ stats }: StatisticsProps) {
  if (!stats) {
    return <></>
  }

  return (
    <Grid container>
      {stats.map((stat, index) => (
        <Grid key={`${stat?.caption}-${index}`} xs={4}>
          <Stat number={stat?.number || 0} decorator={stat?.decorator} caption={stat?.caption}/>
        </Grid>
      ))}
    </Grid>
  )
}
