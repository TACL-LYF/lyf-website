import * as React from "react"
import { graphql } from "gatsby"
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material"
import { isSameDay, format } from "date-fns"

import SanityImage from "@components/Image/SanityImage"
import PortableText from "@components/PortableText"
import { SanityButton } from "@components/Button"

export const sanityEventFragment = graphql`
  fragment SanityEvent on SanityEvent {
    id
    title
    startDateTime
    endDateTime
    eventImage {
      ...SanityImageAsset
    }
    location
    _rawDescription
    button {
      ...SanityButton
    }
  }
`

type EventProps = {
  content: Queries.SanityEventFragment | null
}

export default function Event({ content }: EventProps) {
  if (!content) {
    console.error("No content found for event.")
    return <></>
  }

  const {
    title,
    startDateTime,
    endDateTime,
    eventImage,
    location,
    _rawDescription,
    button,
  } = content

  const start = new Date(startDateTime || 0)
  const end = new Date(endDateTime || 0)
  let dateString = ""
  // Still need to eliminate minutes if not needed
  // Still need to eliminate time if not needed
  if (start == end) {
    dateString = `${format(start, "LLL d h:mm a, y")}`
  } else if (isSameDay(start, end)) {
    dateString = `${format(start, "LLL do h:mm a")} - ${format(
      end,
      "h:mm a, y"
    )}`
  } else {
    dateString = `${format(start, "LLL d h:mm a")} - ${format(
      end,
      "LLL d h:mm a, y"
    )}`
  }

  return (
    <Card
      sx={{
        height: {lg: 1},
        borderRadius: 4,
        border: (theme) => `1px solid ${theme.palette.primary.main}`,
        boxShadow: (theme) => `12px 12px 0px ${theme.palette.primary.main}`,
      }}
    >
      {/* Using this box to set the image height */}
      <Box width={1} height={{
        xs: .3,
        lg: .5,
      }}>
      <SanityImage
        imageAsset={eventImage}
        hasRoundedCorners={false}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      </Box>

      <CardContent sx={{
        flexGrow: 1,
      }}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h6" fontWeight="normal">
          Date: {dateString}
        </Typography>
        <Typography variant="h6" fontWeight="normal">
          Location: {location}
        </Typography>
        <PortableText
          content={_rawDescription}
          sx={{
            paddingTop: 1,
          }}
        />
      </CardContent>
      <CardActions sx={{padding: 2}}>
        <SanityButton content={button} />
      </CardActions>
    </Card>
  )
}
