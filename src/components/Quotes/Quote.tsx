import React from "react"
import { graphql } from "gatsby"
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
  Typography,
  useTheme,
} from "@mui/material"
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

export default function Quote({ content, color, isSelected }: QuoteProps) {
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
    <AnimatedCard style={cardStyles} sx={{ borderRadius: 4 }}>
      <CardContent sx={{ height: 1, padding: 4 }}>
        <Stack justifyContent="space-between" sx={{ height: 1 }} spacing={1}>
          <Stack spacing={2}>
            <FormatQuote sx={{ fontSize: "64px" }} />
            <PortableText
              content={_rawContent}
              minHeaderSize="h6"
              sx={{
                maxHeight: "55vh",
                overflow: "auto",
              }}
            />
          </Stack>
          <Stack sx={{ paddingBottom: 2 }}>
            <Typography>{name}</Typography>
            {yearsAttendedCamp && <Typography>{yearsAttendedCamp}</Typography>}
          </Stack>
        </Stack>
      </CardContent>
    </AnimatedCard>
  )
}
