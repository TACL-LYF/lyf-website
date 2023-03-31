import React from "react"
import { graphql } from "gatsby"
import { Card, CardContent, Stack, Typography, useTheme } from "@mui/material"
import { FormatQuote } from "@mui/icons-material"
import { useSpring, animated, useResize, config } from "@react-spring/web"
import PortableText from "@components/PortableText"

export const sanityQuoteFragment = graphql`
  fragment SanityQuote on SanityQuote {
    _key
    name
    _rawContent
    yearsAttendedCamp
  }
`
const AnimatedCard = animated(Card)

type QuoteProps = {
  content: Queries.SanityQuoteFragment | null | undefined
  isSelected: boolean
  color: "primary" | "secondary" | "tertiary"
}

export default function Quote({
  content,
  color,
  isSelected,
}: QuoteProps) {
  const theme = useTheme()
  const cardStyles = useSpring({
    backgroundColor: isSelected
      ? theme.palette[color].dark
      : theme.palette.offwhite,
    color: isSelected
      ? theme.palette[color].contrastText
      : theme.palette[color].dark,
    opacity: isSelected ? 1 : 0.4,
    config: config.slow,
  })

  if (!content) {
    return <></>
  }

  const { name, _rawContent, yearsAttendedCamp } = content

  return (
    <AnimatedCard style={cardStyles}>
      <CardContent>
        <Stack justifyContent="space-evenly" spacing={2}>
          <FormatQuote fontSize="large" />
          <PortableText content={_rawContent} />
          <Stack>
            <Typography>{name}</Typography>
            {yearsAttendedCamp && <Typography>{yearsAttendedCamp}</Typography>}
          </Stack>
        </Stack>
      </CardContent>
    </AnimatedCard>
  )
}
